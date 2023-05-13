"use client";

import React, { useEffect } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";

import { useAmbiencesStore, useModalStore, usePaginationStore } from "@/store";
import { ambienceQueries } from "@/queries";
import {
  AmbienceFilter,
  AmbienceForm,
  Modal,
  PrivateRouteWrapper,
  Table,
} from "@/components";

import * as D from "./data";

const Ambiences = () => {
  const {
    hasFilteredAmbiences,
    isLoading,
    fetchData,
    paginationData,
    selectedFilter,
  } = useAmbiencesStore();
  const { toggleVisibility, modalType } = useModalStore();
  const { pagination, setPagination } = usePaginationStore();

  const { query, queryWithFilters } = ambienceQueries(
    pagination,
    selectedFilter!
  );

  const handleRemoveFilter = (filter: string) => {
    const filterData = { ...selectedFilter, [filter]: "" };

    fetchData(queryWithFilters, filterData);
  };

  useEffect(() => {
    (async () => {
      if (hasFilteredAmbiences) {
        fetchData(queryWithFilters, selectedFilter);
      } else {
        fetchData(query);
      }
    })();
  }, [
    fetchData,
    hasFilteredAmbiences,
    query,
    queryWithFilters,
    selectedFilter,
  ]);

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
          Ambientes
        </h1>
        <div className="inline-flex w-full gap-4 sm:w-auto">
          {selectedFilter && (
            <>
              {selectedFilter.type && (
                <div className="inline-flex items-center p-2 space-x-2 bg-white rounded-lg shadow-md">
                  <span className="font-medium text-gray-700">
                    {selectedFilter.type === "laboratory"
                      ? "Laboratório"
                      : selectedFilter.type === "class"
                      ? "Sala"
                      : "Outros"}
                  </span>
                  <button
                    className="px-2 font-medium text-gray-700 border-l border-primary hover:text-red-400"
                    onClick={() => handleRemoveFilter("type")}
                  >
                    X
                  </button>
                </div>
              )}
              {selectedFilter.availability && (
                <div className="inline-flex items-center p-2 space-x-2 bg-white rounded-lg shadow-md">
                  <span className="font-medium text-gray-700">
                    {selectedFilter.availability === "available"
                      ? "Disponível"
                      : "Indisponível"}
                  </span>
                  <button
                    className="px-2 font-medium text-gray-700 border-l border-primary hover:text-red-400"
                    onClick={() => handleRemoveFilter("availability")}
                  >
                    X
                  </button>
                </div>
              )}
            </>
          )}
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
          <AmbienceFilter />
        </Modal>
      )}

      {modalType === "view" && (
        <Modal>
          <AmbienceForm />
        </Modal>
      )}
    </PrivateRouteWrapper>
  );
};

export default Ambiences;
