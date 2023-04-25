import { useMemo } from "react";
import { momentLocalizer, stringOrDate } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

import { reservationModel, semesterModel } from "@/models";
import { getWeeklyDates } from "@/utils";

moment.locale("pt-br");

export const localizer = momentLocalizer(moment);

export const Messages = () => {
  return useMemo(
    () => ({
      week: "Semana",
      work_week: "Semana de trabalho",
      day: "Dia",
      month: "Mês",
      previous: "🡨",
      next: "🡪",
      today: "Hoje",
      agenda: "Agenda",
    }),
    []
  );
};

export const getEventStyle = (event: any) => {
  let backgroundColor = "#a7adb6";
  let border = "1px solid #265985";
  let color = "#fff";

  switch (event.ambience?.availability) {
    case "available":
      backgroundColor = event.isSemester ? "#F6AD55" : "#2C5282";
      border = event.isSemester ? "1px solid #265985" : "1px solid #F6AD55";
      color = event.isSemester ? "#000" : "#fff";
      break;
    default:
      break;
  }

  const style = {
    borderRadius: "8px",
    backgroundColor,
    color,
    border,
  };

  return {
    style: style,
  };
};

export const getReservationWithSemester = (
  reservations: reservationModel[],
  semesters?: semesterModel[]
) => {
  return reservations.flatMap((reservation) => {
    if (reservation.isSemester) {
      const newSemestralReservations: reservationModel[] = [];
      const formattedStartHour = moment(reservation.start).format("HH:mm");
      const formattedEndHour = moment(reservation.end).format("HH:mm");
      const dayOfWeek = moment(reservation.start).day();

      const currentSemester = semesters?.find((s) => s.currentSemester);

      const weeklyDates = getWeeklyDates(
        dayOfWeek,
        formattedStartHour,
        formattedEndHour,
        currentSemester?.initialDayOfSemester!,
        currentSemester?.lastDayOfSemester!
      );

      // Verifica se já existe reserva para o mesmo dia
      const hasReservationForDay = (date: stringOrDate) =>
        newSemestralReservations.some(
          (r) =>
            moment(r.start).isSame(date, "day") ||
            moment(r.end).isSame(date, "day")
        );

      weeklyDates.forEach(
        ({ start, end }: { start: stringOrDate; end: stringOrDate }) => {
          // Verifica se já existe reserva para o mesmo dia e adiciona somente se não houver
          if (!hasReservationForDay(start) && !hasReservationForDay(end)) {
            const newSemestralReservation = {
              data: {
                id: reservation.id,
                isSemester: reservation.isSemester,
                status: reservation.status,
                requester: reservation.requester,
                title: reservation.title,
                ambience: reservation.ambience,
                start,
                end,
              },
            };
            newSemestralReservations.push(newSemestralReservation.data);
          }
        }
      );

      // Retorna as novas reservas semestrais
      return newSemestralReservations;
    }

    // Retorna a reserva normal
    return reservation;
  });
};
