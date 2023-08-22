"use client";

import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { PlusIcon } from "@heroicons/react/24/outline";

import {
  useModalStore,
  usePaginationStore,
  useToastNotificationStore,
  useUserStore,
} from "@/store";
import {
  Button,
  ConfirmationModal,
  Modal,
  PrivateRouteWrapper,
  Table,
  UserForm,
} from "@/components";
import * as D from "./data";
import { userQueries } from "@/queries";

const Users = () => {
  const {
    fetchData,
    isLoading,
    removeUser,
    selectedUser,
    selectUser,
    paginationData,
  } = useUserStore();
  const { modalType, toggleVisibility } = useModalStore();
  const { pagination, setPagination } = usePaginationStore();
  const { isVisible, show } = useToastNotificationStore();

  const { query } = userQueries(pagination);

  useEffect(() => {
    setPagination(paginationData || pagination);
  }, [paginationData]);

  useEffect(() => {
    (async () => {
      fetchData(query);
    })();
  }, []);

  return (
    <PrivateRouteWrapper>
      <div className="flex flex-wrap items-center justify-between px-2 mx-2 mb-4 sm:flex-nowrap sm:mx-0">
        <h1 className="font-mono text-3xl font-semibold text-primary">
          Usuários
        </h1>
        <div className="inline-flex w-full gap-4 sm:w-auto">
          <Button
            type="button"
            className="inline-flex justify-center w-full px-3 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm "
            onClick={() => {
              selectUser();
              toggleVisibility(true, "add");
            }}
          >
            <div className="flex items-center gap-2">
              <h4>Adicionar usuário</h4>
              <PlusIcon className="w-5 h-5 text-white" />
            </div>
          </Button>
        </div>
      </div>

      <Table
        data={D.Data().data}
        columns={D.Data().columns}
        actions={D.Actions()}
        loading={isLoading}
      />

      {isVisible && <ToastContainer />}

      {modalType === "delete" ? (
        <ConfirmationModal
          title="Confirmação de exclusão"
          description="Ao fazer isso o usuário será deletado. Tem certeza que deseja deleta-lo?"
          action={() => {
            removeUser(selectedUser?.id!);
            show("Usuário deletado com sucesso.", "success");
          }}
        />
      ) : (
        <Modal>
          <UserForm />
        </Modal>
      )}
    </PrivateRouteWrapper>
  );
};

export default Users;
