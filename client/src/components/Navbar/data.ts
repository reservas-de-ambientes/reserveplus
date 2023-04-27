import { useAuth } from "@/hooks";

export const GetRoutes = () => {
  const { isAuthenticated, session } = useAuth();

  const routes = [
    {
      name: "Calendário",
      route: "/",
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
  }

  return routes;
};
