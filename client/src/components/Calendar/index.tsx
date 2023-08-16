"use client";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import React, { useEffect, useState } from "react";
import { Calendar as ReactBigCalendar, SlotInfo } from "react-big-calendar";
import { ToastContainer } from "react-toastify";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

import {
  useCalendarStore,
  useReservationStore,
  useModalStore,
  useToastNotificationStore,
  useSemesterStore,
  useAmbiencesStore,
} from "@/store";
import { reservationModel } from "@/models";
import { ambienceQueries, reservationQueries } from "@/queries";
import { useAuth } from "@/hooks";
import {
  Modal,
  ReservationViewModal,
  ReservationForm,
  NoAuthenticatedViewModal,
  CalendarFilter,
} from "@/components";

import { Event, Toolbar } from "./components";
import * as D from "./data";

const DnDCalendar = withDragAndDrop(ReactBigCalendar);

const Calendar = () => {
  const {
    reservations,
    editReservation,
    hasFilteredReservations,
    filteredReservations,
    fetchData,
  } = useReservationStore();
  const { fetchData: fetchDataSemester, semesters } = useSemesterStore();
  const { toggleVisibility, modalType } = useModalStore();
  const { isVisible, show } = useToastNotificationStore();
  const {
    addCalendarData,
    addSelectedCalendarData,
    calendarEvent,
    setCalendarEvent,
  } = useCalendarStore();
  const { fetchDataToSelect } = useAmbiencesStore();
  const { isAuthenticated, session } = useAuth();
  const [currentView, setCurrentView] = useState("month");

  const { queryToSelect } = ambienceQueries();
  const { query } = reservationQueries(Number(session?.user?.id!));

  const handleOpenModalToNewEvent = (slotInfo: SlotInfo) => {
    toggleVisibility(true, "form");
    addCalendarData(slotInfo);
  };

  const handleOpenModalToSelectedReservation = (event: reservationModel) => {
    toggleVisibility(true, "view");
    addSelectedCalendarData(event);
  };

  const handleDnDAndResizeReservation = async (event: any) => {
    const newData: reservationModel = {
      id: event.event.id,
      requester: event.event.requester,
      ambience: event.event.ambience,
      start: event.start,
      end: event.end,
      title: event.event.title,
      isSemester: event.event.isSemester,
      status: event.event.status,
      color: event.event.color,
    };

    const response = await editReservation(event.event.id, newData);
    if (response.status === 200) {
      toggleVisibility(false);
      fetchData(query);
    } else {
      show("Já existe uma reserva nesta sala neste horário.", "error");
    }
  };

  useEffect(() => {
    (async () => {
      fetchData(query);
      fetchDataSemester();
      fetchDataToSelect(queryToSelect);
    })();
  }, [fetchData, fetchDataSemester, fetchDataToSelect, query, queryToSelect]);

  const slotDuration = 10; // Defina a duração dos slots em minutos
  // const slotDuration = 50; // Defina a duração dos slots em minutos

  const hours = [
    moment().set({ hour: 7, minute: 10, second: 0 }).toDate(),
    moment().set({ hour: 8, minute: 0, second: 0 }).toDate(),
    moment().set({ hour: 8, minute: 50, second: 0 }).toDate(),
    moment().set({ hour: 9, minute: 40, second: 0 }).toDate(),
    moment().set({ hour: 10, minute: 30, second: 0 }).toDate(),
    moment().set({ hour: 10, minute: 50, second: 0 }).toDate(),
    moment().set({ hour: 11, minute: 40, second: 0 }).toDate(),
    moment().set({ hour: 13, minute: 0, second: 0 }).toDate(),
    moment().set({ hour: 13, minute: 50, second: 0 }).toDate(),
    moment().set({ hour: 14, minute: 40, second: 0 }).toDate(),
    moment().set({ hour: 15, minute: 30, second: 0 }).toDate(),
    moment().set({ hour: 16, minute: 20, second: 0 }).toDate(),
    moment().set({ hour: 16, minute: 40, second: 0 }).toDate(),
    moment().set({ hour: 17, minute: 30, second: 0 }).toDate(),
    moment().set({ hour: 18, minute: 30, second: 0 }).toDate(),
    moment().set({ hour: 19, minute: 20, second: 0 }).toDate(),
    moment().set({ hour: 20, minute: 10, second: 0 }).toDate(),
    moment().set({ hour: 20, minute: 20, second: 0 }).toDate(),
    moment().set({ hour: 21, minute: 10, second: 0 }).toDate(),
  ];
  const horas = [
    { hour: 7, minute: 10 },
    { hour: 8, minute: 0 },
    { hour: 8, minute: 50 },
    { hour: 9, minute: 40 },
    { hour: 10, minute: 30 },
    { hour: 10, minute: 50 },
    { hour: 11, minute: 40 },
    { hour: 13, minute: 0 },
    { hour: 13, minute: 50 },
    { hour: 14, minute: 40 },
    { hour: 15, minute: 30 },
    { hour: 16, minute: 20 },
    { hour: 16, minute: 40 },
    { hour: 17, minute: 30 },
    { hour: 18, minute: 30 },
    { hour: 19, minute: 20 },
    { hour: 20, minute: 10 },
    { hour: 20, minute: 20 },
    { hour: 21, minute: 10 },
  ];

  const minTime = new Date(); // Define a hora mínima (por exemplo, '9:00')
  const maxTime = new Date(); // Define a hora máxima (por exemplo, '18:00')

  minTime.setHours(7, 10, 0); // Define a hora mínima para '9:00'
  maxTime.setHours(22, 0, 0); // Define a hora máxima para '18:00'

  return (
    <div className="App">
      <DnDCalendar
        views={["month", "week", "day", "agenda"]}
        messages={D.Messages()}
        selectable
        step={slotDuration}
        min={minTime}
        max={maxTime}
        timeslots={5}
        // timeslots={1}
        localizer={D.localizer}
        components={{
          toolbar: Toolbar,
          event: Event,
        }}
        eventPropGetter={D.getEventStyle}
        defaultDate={new Date()}
        defaultView="week"
        events={
          hasFilteredReservations
            ? filteredReservations
            : D.getReservationWithSemester(reservations, semesters)
        }
        className="bg-slate-50"
        onSelectEvent={(reservation: any) => {
          setCalendarEvent("selectEvent");
          handleOpenModalToSelectedReservation(reservation);
        }}
        onSelectSlot={(slotInfo: SlotInfo) => {
          setCalendarEvent("selectSlot");
          handleOpenModalToNewEvent(slotInfo);
        }}
        style={{ height: "90vh", borderRadius: 8, overflow: "hidden" }}
        onEventDrop={handleDnDAndResizeReservation}
        onEventResize={handleDnDAndResizeReservation}
        resizableAccessor={() => currentView !== "month"}
        onView={(view) => setCurrentView(view)}
        draggableAccessor={(event: any) => {
          if (event.requester.id !== Number(session?.user?.id!)) return false;

          return true;
        }}
      />

      {isVisible && <ToastContainer />}

      {modalType !== "filter" && calendarEvent === "selectEvent" ? (
        <Modal>
          <ReservationViewModal />
        </Modal>
      ) : modalType === "filter" ? (
        <Modal>
          <CalendarFilter />
        </Modal>
      ) : !isAuthenticated ? (
        <Modal>
          <NoAuthenticatedViewModal />
        </Modal>
      ) : (
        <Modal>
          <ReservationForm />
        </Modal>
      )}
    </div>
  );
};

export default Calendar;
