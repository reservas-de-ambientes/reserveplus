"use client";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useModalStore, useAmbiencesStore } from "@/store";
import { Button, Input, Radio, Textarea } from "@/components";

const AmbienceForm = () => {
  const { toggleVisibility, modalType } = useModalStore();
  const { selectedAmbience } = useAmbiencesStore();

  const allResponsiblesUsernames = selectedAmbience?.responsibles
    ?.map((responsible) => responsible.username)
    .join(", ");

  return (
    <form>
      <div className="bg-white ">
        <Dialog.Title className="relative p-4 text-lg font-medium leading-6 text-center text-gray-900 border-b border-solid sm:p-4 border-slate-200">
          Visualizar Ambiente
        </Dialog.Title>
        <XMarkIcon
          className="absolute w-6 h-6 text-gray-400 cursor-pointer right-3 top-2"
          onClick={() => toggleVisibility(false)}
        />
      </div>
      <div className="pb-4 bg-white sm:p-1">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:text-left sm:w-full">
            <div>
              <div className="pl-4 pr-4 mt-2">
                <Input
                  label="Código"
                  name="value"
                  type="text"
                  value={selectedAmbience?.value}
                  disabled={modalType === "view"}
                />
                <Radio
                  label="Tipo"
                  name="type"
                  required
                  legend="Selecione o tipo de ambiente"
                  options={[
                    { title: "Laboratório", value: "Laboratório" },
                    { title: "Sala", value: "Sala" },
                    { title: "Outros", value: "Outros" },
                  ]}
                  value={selectedAmbience?.type}
                  disabled={modalType === "view"}
                />
                <Radio
                  label="Disponibilidade"
                  name="availability"
                  required
                  legend="Selecione a disponibilidade do ambiente"
                  options={[
                    { title: "Disponível", value: "available" },
                    { title: "Indisponível", value: "unavailable" },
                  ]}
                  value={selectedAmbience?.availability}
                  disabled={modalType === "view"}
                />
                <Radio
                  label="Depende de reserva"
                  name="dependsOnReservation"
                  required
                  legend="Selecione se o ambiente depende de reserva"
                  options={[
                    { title: "Sim", value: "Sim" },
                    { title: "Não", value: "Não" },
                  ]}
                  value={selectedAmbience?.dependsOnReservation}
                  disabled={modalType === "view"}
                />
                <Input
                  label="Responsáveis"
                  name="responsibles"
                  type="text"
                  required
                  value={allResponsiblesUsernames}
                  disabled={modalType === "view"}
                />
                {selectedAmbience?.numberOfMachines && (
                  <Input
                    label="Número de máquinas"
                    name="value"
                    type="text"
                    value={selectedAmbience?.numberOfMachines}
                    disabled={modalType === "view"}
                  />
                )}
                {selectedAmbience?.peopleCapacity && (
                  <Input
                    label="Capacidade de pessoas"
                    name="value"
                    type="text"
                    value={selectedAmbience?.peopleCapacity}
                    disabled={modalType === "view"}
                  />
                )}
                <Textarea
                  label="Descrição"
                  name="description"
                  value={selectedAmbience?.description}
                  disabled={modalType === "view"}
                />
                <Input
                  label="Tranca"
                  name="lock"
                  type="text"
                  value={selectedAmbience?.lock}
                  disabled={modalType === "view"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-4 px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
        <Button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:opacity-50 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => toggleVisibility(false)}
        >
          Fechar
        </Button>
      </div>
    </form>
  );
};

export default AmbienceForm;
