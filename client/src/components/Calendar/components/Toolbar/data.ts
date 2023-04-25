import { View } from "react-big-calendar";

import { useAmbiencesStore } from "@/store";

type handleMiddleTextProps = {
  monthYear: string;
  view: View;
  date: Date;
};

export const handleMiddleText = ({
  monthYear,
  view,
  date,
}: handleMiddleTextProps) => {
  let middleText = monthYear;

  if (view === "week") {
    const start = new Date(date);
    const end = new Date(date);

    start.setDate(start.getDate() - start.getDay());
    end.setDate(start.getDate() + 6);

    middleText = `${start.toLocaleString("pt-BR", {
      month: "long",
      day: "numeric",
    })} - ${end.toLocaleString("pt-BR", {
      month: "long",
      day: "numeric",
    })}`;
  } else if (view === "day") {
    middleText = date.toLocaleString("pt-BR", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  return middleText;
};

export const ToolbarOptions = () => {
  const { ambiences } = useAmbiencesStore();

  const filterReservationsOptions = [
    {
      id: 1,
      value: "Pontual",
      title: "Pontual",
    },
    {
      id: 2,
      value: "Semestral",
      title: "Semestral",
    },
  ];

  const filterAmbiencesOptions = ambiences
    .filter((ambience) => ambience.dependsOnReservation === "Sim")
    .map((ambience) => ({
      id: ambience.id,
      value: ambience.id.toString(),
      title: ambience.value,
    }));

  return { filterReservationsOptions, filterAmbiencesOptions };
};
