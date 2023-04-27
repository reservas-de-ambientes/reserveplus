"use client";

import {
  CheckCircleIcon,
  EyeIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import { useAmbiencesStore, useModalStore } from "@/store";

export const Data = () => {
  const { ambiences } = useAmbiencesStore();

  return {
    data: ambiences.map((ambience) => ({
      ...ambience,
    })),
    columns: [
      { Header: "Ambiente", accessor: "value" },
      { Header: "Tipo", accessor: "type" },
      {
        Header: "Disponibilidade",
        accessor: "availability",
        Cell: ({ value }: any) =>
          value === "available" ? (
            <CheckCircleIcon className="w-full text-green-400 h-7" />
          ) : (
            <XCircleIcon className="w-full text-red-400 h-7 " />
          ),
      },
      {
        Header: "Responsáveis",
        accessor: "responsibles",
        Cell: ({ value }: any) => (
          <div
            className="flex flex-col"
            title={value?.map((item: any) => item.username)}
          >
            {value?.length === 1
              ? value[0]?.username
              : value?.length === 2
              ? value[0].username + ", " + value[1].username
              : value[0].username + ", " + value[1].username + "..."}
          </div>
        ),
      },
    ],
  };
};

export const Actions = () => {
  const { selectAmbience } = useAmbiencesStore();
  const { toggleVisibility } = useModalStore();

  const seeAction = (row: any) => (
    <EyeIcon
      className="p-2 bg-blue-200 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Visualizar"
      onClick={() => {
        toggleVisibility(true, "view");
        selectAmbience(row.original.id);
      }}
    />
  );

  return [seeAction];
};
