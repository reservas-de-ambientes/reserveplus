"use client";

import React, { useState } from "react";
import { ToolbarProps } from "react-big-calendar";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

import { useReservationStore, useSemesterStore } from "@/store";
import { formatDateToFullMonthWithYear } from "@/utils";
import { Button, Select } from "@/components";

import * as D from "./data";

type filterDataProps = {
  value: string;
  type: string;
};

const Toolbar = ({ date, view, onView, onNavigate }: ToolbarProps) => {
  const { filterReservations, hasFilteredReservations } = useReservationStore();
  const { semesters } = useSemesterStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterData, setFilterData] = useState({
    value: "",
    type: "",
  } as filterDataProps);

  const { filterAmbiencesOptions, filterReservationsOptions } =
    D.ToolbarOptions();
  const monthYear = formatDateToFullMonthWithYear(date);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    filterReservations(filterData.type, filterData.value, semesters);
  };

  return (
    <div className="flex flex-col items-center justify-between p-1 sm:flex-row">
      <div className="flex items-center space-x-2">
        <button
          className="p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none"
          onClick={() => onNavigate("PREV")}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          className="p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none"
          onClick={() => onNavigate("TODAY")}
        >
          Hoje
        </button>
        <button
          className="p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none"
          onClick={() => onNavigate("NEXT")}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="font-bold text-center text-primary">
        {D.handleMiddleText({ monthYear, view, date })}
      </div>
      <div className="flex items-center space-x-2">
        <button
          className={`p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none ${
            view === "month" ? "bg-secondary" : ""
          }`}
          onClick={() => onView("month")}
        >
          Mês
        </button>
        <button
          className={`p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none ${
            view === "week" ? "bg-secondary" : ""
          }`}
          onClick={() => onView("week")}
        >
          Semana
        </button>
        <button
          className={`p-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondaryfocus:outline-none ${
            view === "day" ? "bg-secondary" : ""
          }`}
          onClick={() => onView("day")}
        >
          Dia
        </button>
        <div className="relative inline-block">
          <FunnelIcon
            title="Filtrar"
            onClick={() => setShowDropdown(!showDropdown)}
            className={`${
              showDropdown ? "bg-secondary" : ""
            } cursor-pointer inline-flex items-center w-10 h-10 p-2 space-x-2 text-gray-700 rounded hover:bg-secondary hover:text-primary focus:bg-secondary focus:outline-none`}
          />
          <div
            className={`absolute right-0 z-50 ${
              showDropdown ? "block" : "hidden"
            } px-2 py-2 mt-2 transition-all duration-200 ease-in-out bg-white rounded-md shadow-lg w-max group-hover:block`}
          >
            <form className="gap-2 sm:flex sm:flex-col" onSubmit={handleSubmit}>
              <Select
                name="value"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFilterData((prev) => ({
                    ...prev,
                    value: e.target.value,
                  }));
                }}
                value={filterData.value}
                options={filterAmbiencesOptions}
                defaultValue=""
                label="Ambientes"
                hasAllOption="Todos os ambientes"
              />
              <Select
                name="type"
                label="Tipo de Reserva"
                defaultValue=""
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFilterData((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }));
                }}
                value={filterData.type}
                options={filterReservationsOptions}
                hasAllOption="Todas as reservas"
              />
              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm h-11 sm:mb-0 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-green-700 focus:ring-green-500"
                >
                  Filtrar
                </Button>
                {hasFilteredReservations && (
                  <Button
                    type="button"
                    className="w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm h-11 sm:mb-0 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-red-700 focus:ring-red-500"
                    onClick={() => {
                      setFilterData({ value: "", type: "" });
                      filterReservations();
                    }}
                  >
                    Remover filtros
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
