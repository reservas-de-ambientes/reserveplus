import { useAuth } from "@/hooks";

export const GetRoutes = () => {
  const { isAuthenticated, session } = useAuth();

  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Reservar",
      route: "/reservar",
    },
  ];

  if (isAuthenticated) {
    if (session?.user?.type === "Docente ou TAE") {
      routes.push({
        name: "Ambientes",
        route: "/ambientes",
      });
      routes.push({
        name: "Solicitações",
        route: "/solicitacoes",
      });
    } else {
      routes.push({
        name: "Ambientes",
        route: "/ambientes",
      });
    }
    if (session?.user?.isAdmin) {
      routes.push({
        name: "Semestres",
        route: "/semestres",
      });
    }
  }

  return routes;
};
