# Reservas

Sistemas de Reservas de ambientes

## Pré-requisitos

* Node.js
* Docker
* Outras dependências do projeto

## Instalação

1. Clone o repositório do projeto:
```bash
  git clone https://github.com/igor-cotrim/reservas.git
```

2. Instale as dependências do Front-end (client):
```bash
  cd nome-do-projeto
  cd client
  npm install
```

3. Instale as dependências do Back-end Teste (server-teste):
```bash
  cd nome-do-projeto
  cd server-teste
  npm install
```

## Configuração

1. Entre no client e crie o arquivo .env.local e copie o conteudo do .env.example:
```bash
  cd client
  touch .env.local
```

2. No docker-compose.dev.yml, descomente o serviço server_teste e comente o serverDB e o server;

3. Ainda docker-compose.dev.yml, no serviço client mude de server para server_teste no depends_on

4. Rode o comando para criar a network com o nome reservas_network
```bash
  docker network create reservas_network
```

## Iniciar

1. Rode o comando na raiz do projeto

```bash
  docker-compose -f docker-compose.dev.yml up --build
```