import { create } from "zustand";

import { userApiModel } from "@/models";
import { createUser, deleteUser, editUser, getUsers } from "@/services";
import { PaginationProps } from "./paginationStore";

interface IUser {
  users: userApiModel[];
  selectedUser: userApiModel | null;
  paginationData: PaginationProps | null;
  isLoading: boolean;
  errorMessage: string;
  clearErrorMessage: () => void;
  fetchData: (params?: any) => void;
  selectUser: (id?: number) => void;
  addUser: (newUser: userApiModel) => void;
  editUser: (id: number, newUser: userApiModel) => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<IUser>((set, get) => ({
  users: [],
  selectedUser: null,
  isLoading: true,
  errorMessage: "",
  paginationData: null,
  fetchData: async (params) => {
    const { data, meta } = await getUsers(params);

    set({
      users: data,
      paginationData: meta.pagination,
      isLoading: false,
    });
  },
  clearErrorMessage: () => set({ errorMessage: "" }),
  selectUser: (id) => {
    const users = get().users;
    const selectedUser = users.find((user) => user.id === id) || null;

    set({ selectedUser: !!id ? selectedUser : null });
  },
  addUser: async (newUser) => {
    const response = await createUser(newUser);

    if (!response.data && !!response.error) {
      set({ errorMessage: response.error.message });

      return response;
    }

    get().fetchData();

    return response;
  },
  editUser: async (id, newSemester) => {
    const response = await editUser(id, newSemester);

    if (!response.data && !!response.error) {
      set({ errorMessage: response.error.message });

      return response;
    }

    get().fetchData();

    return response;
  },
  removeUser: async (id) => {
    await deleteUser(id);

    get().fetchData();
  },
}));
