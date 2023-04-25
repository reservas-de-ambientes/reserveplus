import { reservationModel } from "@/models";

export const reservations: reservationModel[] = [
  {
    id: 1,
    ambienceId: 1,
    title: "Test",
    responsible: "Igor",
    start: new Date(2023, 2, 9),
    end: new Date(2023, 2, 9),
    isSemester: false,
  },
  {
    id: 2,
    ambienceId: 1,
    title: "All Day Event very long title",
    responsible: "Igor",
    start: new Date(2023, 2, 10),
    end: new Date(2023, 2, 10),
    isSemester: false,
  },
  {
    id: 3,
    ambienceId: 2,
    title: "Today",
    responsible: "Igor",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    isSemester: false,
  },
  {
    id: 4,
    ambienceId: 2,
    title: "Point in Time Event",
    responsible: "Igor",
    start: new Date(2023, 2, 24),
    end: new Date(2023, 2, 24),
    isSemester: false,
  },
  {
    id: 5,
    ambienceId: 1,
    title: "Teste 2",
    responsible: "Igor",
    start: new Date(2023, 2, 23),
    end: new Date(2023, 2, 24),
    isSemester: false,
  },
];
