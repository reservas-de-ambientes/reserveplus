import { create } from "zustand";

import { PaginationProps } from "@/store";
import { ambienceModel } from "@/models";
import { formatAmbienceData } from "@/utils";
import { getAmbiences } from "@/services";

interface IAmbiences {
  ambiences: ambienceModel[];
  hasFilteredAmbiences: boolean;
  selectedAmbience: ambienceModel | null;
  selectedFilter: Pick<ambienceModel, "type" | "availability"> | null;
  paginationData: PaginationProps | null;
  isLoading: boolean;
  fetchData: (params?: any, filters?: any) => void;
  fetchDataToSelect: (params?: any, filters?: any) => void;
  selectAmbience: (id?: number) => void;
}

export const useAmbiencesStore = create<IAmbiences>((set, get) => ({
  ambiences: [],
  selectedAmbience: null,
  selectedFilter: null,
  hasFilteredAmbiences: false,
  isLoading: true,
  paginationData: null,
  fetchData: async (params, filters = null) => {
    const { data, meta } = await getAmbiences(params);

    const formattedData = data.map(formatAmbienceData);

    set({
      ambiences: formattedData,
      paginationData: meta.pagination,
      hasFilteredAmbiences: !!(
        filters &&
        (filters.type !== "" || filters.availability !== "")
      )
        ? true
        : false,
      selectedFilter: filters,
      isLoading: false,
    });
  },
  fetchDataToSelect: async (params) => {
    const { data } = await getAmbiences(params);

    const formattedData = data.map(formatAmbienceData);

    set({
      ambiences: formattedData,
    });
  },
  selectAmbience: (id) => {
    const ambiences = get().ambiences;
    const selectedAmbience =
      ambiences.find((ambience) => ambience.id === id) || null;

    set({ selectedAmbience: !!id ? selectedAmbience : null });
  },
}));
