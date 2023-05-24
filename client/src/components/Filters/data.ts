import { useAmbiencesStore } from "@/store";

export const filtersOptions = () => {
  const { ambiences } = useAmbiencesStore();

  const ambienceFilterTypeOptions = [
    {
      id: 1,
      title: "Laboratório",
      value: "laboratory",
    },
    {
      id: 2,
      title: "Sala",
      value: "class",
    },
    {
      id: 3,
      title: "Outros",
      value: "others",
    },
  ];

  const ambienceFilterAvailabilityOptions = [
    {
      id: 1,
      title: "Disponível",
      value: "available",
    },
    {
      id: 2,
      title: "Indisponível",
      value: "unavailable",
    },
  ];

  const solicitationFilterStatusOptions = [
    {
      id: 1,
      title: "Aprovado",
      value: "approved",
    },
    {
      id: 2,
      title: "Reprovado",
      value: "disapproved",
    },
  ];

  const calendarFilterTypeOptions = [
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

  const calendarFilterAmbiencesOptions = ambiences
    .filter((ambience) => ambience.dependsOnReservation === "Sim")
    .map((ambience) => ({
      id: ambience.id,
      value: ambience.id.toString(),
      title: ambience.value,
    }));

  return {
    ambienceFilterTypeOptions,
    ambienceFilterAvailabilityOptions,
    solicitationFilterStatusOptions,
    calendarFilterTypeOptions,
    calendarFilterAmbiencesOptions,
  };
};
