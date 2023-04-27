import { create } from "zustand";

export type PaginationProps = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

type PaginationStore = {
  pagination: PaginationProps;
  setPagination: (updater: (prev: PaginationProps) => PaginationProps) => void;
  resetPagination: () => void;
};

export const usePaginationStore = create<PaginationStore>((set) => ({
  pagination: {
    page: 1,
    pageCount: 1,
    pageSize: 8,
    total: 0,
  },
  setPagination: (updater) =>
    set((state) => ({
      pagination: updater(state.pagination),
    })),
  resetPagination: () =>
    set({ pagination: { page: 1, pageCount: 1, pageSize: 8, total: 0 } }),
}));
