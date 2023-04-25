import { useAmbiencesStore } from "@/store";

export const FormsOptions = () => {
  const { ambiences } = useAmbiencesStore();

  const reservationAmbienceOptions = ambiences
    .filter((ambience) => ambience.dependsOnReservation)
    .map((ambience) => ({
      id: ambience.id,
      value: ambience.id.toString(),
      title: ambience.value,
    }));

  return {
    reservationAmbienceOptions,
  };
};
