/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  rewrites: async () => [
    {
      source: "/ambientes",
      destination: "/pages/Ambiences",
    },
    {
      source: "/reservar",
      destination: "/pages/Reserve",
    },
    {
      source: "/usuarios",
      destination: "/pages/Users",
    },
    {
      source: "/solicitacoes",
      destination: "/pages/Solicitations",
    },
    {
      source: "/semestres",
      destination: "/pages/Semesters",
    },
    {
      source: "/usuarios",
      destination: "/pages/Users",
    },
    {
      source: "/signIn",
      destination: "/pages/SignIn",
    },
  ],
};

module.exports = nextConfig;
