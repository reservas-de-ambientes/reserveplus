import { stringOrDate } from "react-big-calendar";

import { ambienceApiModel, ambienceModel } from "./ambience.model";
import { userApiModel, userModel } from "./user.model";

export type reservationModel = {
  id?: number;
  ambience: Pick<
    ambienceModel,
    "id" | "value" | "availability" | "numberOfMachines" | "peopleCapacity"
  >;
  title: string;
  start: stringOrDate;
  end: stringOrDate;
  isSemester: boolean;
  status: string;
  requester: Pick<userModel, "id" | "name" | "type">;
};

export type reservationApiModel = {
  id: number;
  attributes: {
    createdAt: string;
    end: string;
    isSemester: boolean;
    publishedAt: string;
    start: string;
    status: string;
    title: string;
    updatedAt: string;
    ambience?: {
      data: ambienceApiModel;
    };
    requester?: {
      data: userApiModel;
    };
  };
};
