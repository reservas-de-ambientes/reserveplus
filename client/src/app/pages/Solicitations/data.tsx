import {
  CheckCircleIcon,
  ClockIcon,
  EyeIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

import { useModalStore, useSolicitationStore } from "@/store";

export const Data = () => {
  const { solicitations } = useSolicitationStore();

  return {
    data: solicitations.map((solicitation) => ({
      ...solicitation,
    })),
    columns: [
      { Header: "Título", accessor: "title" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }: any) =>
          value === "pending" ? (
            <ClockIcon
              title="Pendente"
              className="w-full text-orange-400 h-7"
            />
          ) : value === "approved" ? (
            <CheckCircleIcon
              title="Aprovado"
              className="w-full text-green-400 h-7"
            />
          ) : (
            <XCircleIcon
              title="Reprovado"
              className="w-full text-red-400 h-7 "
            />
          ),
      },
      {
        Header: "Ambiente",
        accessor: "ambience",
        Cell: ({ value }: any) => value?.value,
      },
      {
        Header: "Solicitante",
        accessor: "requester",
        Cell: ({ value }: any) => value?.name,
      },
    ],
  };
};

export const Actions = () => {
  const { selectSolicitation } = useSolicitationStore();
  const { toggleVisibility } = useModalStore();

  const seeAction = (row: any) => (
    <EyeIcon
      className="p-2 bg-blue-200 rounded-lg cursor-pointer text-primary w-9 h-9"
      title="Visualizar"
      onClick={() => {
        toggleVisibility(true, "view");
        selectSolicitation(row.original.id);
      }}
    />
  );

  const approvedAction = (row: any) => (
    <CheckCircleIcon
      type="button"
      className="p-2 text-green-700 bg-green-200 rounded-lg cursor-pointer w-9 h-9"
      title="Aprovar"
      onClick={() => {
        toggleVisibility(true, "approved");
        selectSolicitation(row.original.id);
      }}
    />
  );

  const disapprovedAction = (row: any) => (
    <XCircleIcon
      className="p-2 text-red-500 bg-red-200 rounded-lg cursor-pointer w-9 h-9"
      title="Reprovar"
      onClick={() => {
        toggleVisibility(true, "delete");
        selectSolicitation(row.original.id);
      }}
    />
  );

  return [seeAction, approvedAction, disapprovedAction];
};
