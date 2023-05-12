export const filtersOptions = () => {
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

  return {
    ambienceFilterTypeOptions,
    ambienceFilterAvailabilityOptions,
    solicitationFilterStatusOptions,
  };
};
