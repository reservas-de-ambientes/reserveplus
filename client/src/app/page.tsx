"use client";

import React from "react";

import { useAuth } from "@/hooks";
import { Carousel, Section } from "@/components";
import * as D from "./data";

const Home = () => {
  const { session } = useAuth();
  const userType = session?.user?.type;

  const renderSection = (
    title: string,
    description: string,
    images: { image: string }[]
  ) => (
    <Section title={title} description={description}>
      <Carousel className="w-full mb-4 md:w-3/4" data={images} />
    </Section>
  );

  return (
    <div>
      <div className="flex px-2 mx-2 mb-4 sm:flex-nowrap sm:mx-0">
        <h1 className="font-mono text-3xl font-semibold text-secondary">
          Olá{!!session ? `, ${session?.user?.name}!` : "!"} Bem-vindo(a) ao
          Sistema de Reservas!
        </h1>
      </div>
      <h3 className="px-2 mx-2 mb-4 text-lg font-normal text-justify text-secondary sm:mx-0">
        Aqui você pode agendar facilmente os ambientes disponíveis para suas
        atividades acadêmicas ou de pesquisa. Nossa plataforma oferece uma
        experiência simplificada para gerenciar suas reservas e garantir que
        você tenha os laboratórios certos no momento certo.
      </h3>

      {renderSection(
        "Reservar",
        "Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.",
        D.carouselData
      )}

      {userType === "Docente ou TAE" ? (
        <>
          {renderSection(
            "Ambientes",
            "Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.",
            D.carouselData
          )}
          {renderSection(
            "Solicitações",
            "Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.",
            D.carouselData
          )}
        </>
      ) : !!userType ? (
        <>
          {renderSection(
            "Ambientes",
            "Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.Visualize os horários disponíveis para cada laboratório.",
            D.carouselData
          )}
        </>
      ) : null}
    </div>
  );
};

export default Home;
