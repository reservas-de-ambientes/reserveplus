"use client";

import React, { useEffect } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

import {
  useModalStore,
  usePaginationStore,
  useSolicitationStore,
} from "@/store";
import { useAuth } from "@/hooks";
import { solicitationQueries } from "@/queries";
import {
  ConfirmationModal,
  Modal,
  SolicitationViewModal,
  Table,
  PrivateRouteWrapper,
  SolicitationFilter,
} from "@/components";

import * as D from "./data";

const Solicitations = () => {
  const {
    fetchData,
    paginationData,
    changeStatusSolicitation,
    isLoading,
    hasFilteredAmbiences,
  } = useSolicitationStore();
  const { toggleVisibility, modalType } = useModalStore();
  const { pagination, setPagination } = usePaginationStore();
  const { session } = useAuth();

  const { query } = solicitationQueries(pagination, Number(session?.user?.id!));

  useEffect(() => {
    (async () => {
      fetchData(query);
    })();
  }, [fetchData, query]);

  useEffect(() => {
    if (!!paginationData) {
      setPagination(() => ({
        page: paginationData.page,
        pageSize: paginationData.pageSize,
        total: paginationData.total,
        pageCount: paginationData.pageCount,
      }));
    }
  }, [paginationData, setPagination]);

  return (
    <PrivateRouteWrapper>
      <div className="flex flex-wrap items-center justify-between px-2 mx-2 mb-4 sm:flex-nowrap sm:mx-0">
        <h1 className="font-mono text-3xl font-semibold text-secondary">
          Solicitações
        </h1>
        <div className="inline-flex w-full gap-4 sm:w-auto">
          <div className="relative inline-block ">
            <FunnelIcon
              title="Filtrar"
              onClick={() => toggleVisibility(true, "filter")}
              className={`inline-flex items-center w-10 h-10 p-2 space-x-2 rounded-lg cursor-pointer ${
                hasFilteredAmbiences
                  ? "bg-blue-400 text-white"
                  : "bg-secondary text-primary"
              }  focus:bg-secondary focus:outline-none`}
            />
          </div>
        </div>
      </div>

      <Table
        data={D.Data().data}
        columns={D.Data().columns}
        actions={D.Actions()}
        loading={isLoading}
      />

      {modalType === "filter" && (
        <Modal>
          <SolicitationFilter />
        </Modal>
      )}

      {modalType === "view" && (
        <Modal>
          <SolicitationViewModal />
        </Modal>
      )}
      {modalType === "approved" && (
        <ConfirmationModal
          title="Confirmação de aprovação"
          description="Ao fazer isso a solicitação será aprovada. Tem certeza que deseja aprova-la?"
          action={() => changeStatusSolicitation("approved", query)}
          approvedButton
        />
      )}
      {modalType === "delete" && (
        <ConfirmationModal
          title="Confirmação de reprovação"
          description="Ao fazer isso a solicitação será reprovada. Tem certeza que deseja reprova-la?"
          action={() => changeStatusSolicitation("disapproved", query)}
        />
      )}
    </PrivateRouteWrapper>
  );
};

export default Solicitations;
