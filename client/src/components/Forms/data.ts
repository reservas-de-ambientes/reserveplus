import { useAmbiencesStore, useUserStore } from "@/store";

export const FormsOptions = () => {
  const { ambiences, selectedAmbience } = useAmbiencesStore();
  const { users } = useUserStore();

  const reservationAmbienceOptions = ambiences
    .filter((ambience) => ambience.dependsOnReservation)
    .map((ambience) => ({
      id: ambience.id,
      value: ambience.id.toString(),
      title: ambience.value,
    }));

  const ambienceResponsiblesOptions = users
    .filter((user) => user.type === "Docente ou TAE")
    .map((user) => ({
      key: user.id.toString(),
      value: user.id.toString(),
      label: user.username,
    }));

  const userResponsiblesOptions = users
    .filter((user) => user.type === "Docente ou TAE")
    .map((user) => ({
      id: user.id,
      value: user.id.toString(),
      title: user.username,
    }));

  return {
    reservationAmbienceOptions,
    ambienceResponsiblesOptions,
    userResponsiblesOptions,
  };
};
