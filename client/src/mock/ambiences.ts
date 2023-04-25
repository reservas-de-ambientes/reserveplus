import { ambienceModel } from "@/models";

export const ambiences: ambienceModel[] = [
  {
    id: 1,
    responsibleId: 2,
    value: "H404",
    type: "Laboratório",
    availability: "Disponível",
    dependsOnReservation: "Sim",
    lock: "0001",
    description: "Sala de laboratorio",
  },
  {
    id: 2,
    responsibleId: 2,
    value: "H401",
    type: "Laboratório",
    availability: "Indisponível",
    dependsOnReservation: "Sim",
    lock: "0002",
    description: "Sala de laboratorio",
  },
  {
    id: 3,
    responsibleId: 3,
    value: "H201",
    type: "Outros",
    availability: "Disponível",
    dependsOnReservation: "Não",
  },
  {
    id: 4,
    responsibleId: 3,
    value: "H305",
    type: "Outros",
    availability: "Disponível",
    dependsOnReservation: "Não",
    lock: "0004",
    description: "Sala de Aula",
  },
];
