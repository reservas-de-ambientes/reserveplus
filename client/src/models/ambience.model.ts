import { userApiModel } from "./user.model";

export type responsibleModel = {
  id: number;
  username: string;
  type: string;
};

export type ambienceModel = {
  id: number;
  responsibles?: responsibleModel[];
  value: string;
  type: string;
  availability: string;
  dependsOnReservation: string;
  description?: string;
  numberOfMachines?: number;
  peopleCapacity?: number;
  lock?: string;
};

export type ambienceApiModel = {
  id: number;
  attributes: {
    availability: string;
    createdAt: string;
    dependsOnReservation: string;
    description?: string;
    lock?: string;
    numberOfMachines?: number;
    peopleCapacity?: number;
    publishedAt: string;
    type: string;
    updatedAt: string;
    value: string;
    responsibles?: {
      data: userApiModel[];
    };
  };
};
