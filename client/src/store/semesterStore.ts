import { create } from "zustand";

import { semesterApiModel, semesterModel } from "@/models";
import { getSemesters } from "@/services";

interface ISemester {
  semesters: semesterModel[];
  isLoading: boolean;
  fetchData: (params?: any) => void;
}

export const useSemesterStore = create<ISemester>((set, get) => ({
  semesters: [],
  isLoading: true,
  fetchData: async (params) => {
    const { data } = await getSemesters(params);

    const formattedData = data.map((semester: semesterApiModel) => ({
      id: semester.id,
      semester: semester.attributes.semester,
      initialDayOfSemester: semester.attributes.initialDayOfSemester,
      lastDayOfSemester: semester.attributes.lastDayOfSemester,
      currentSemester: semester.attributes.currentSemester,
    }));

    set({
      semesters: formattedData,
      isLoading: false,
    });
  },
}));
