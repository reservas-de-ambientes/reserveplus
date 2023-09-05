# Reservas

Sistemas de Reservas de ambientes

## Pré-requisitos

* Node.js
* Docker
* Yarn
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
  yarn ou npm install
```

3. Instale as dependências do Back-end Teste (server-teste):
```bash
  cd nome-do-projeto
  cd server-teste
  yarn ou npm install
```

## Configuração

1. Na raiz do projeto crie o arquivo .env e copie o conteudo do .env.example:
```bash
  cd client
  touch .env
```

2. Entre no client e crie o arquivo .env.local e copie o conteudo do .env.example:
```bash
  cd client
  touch .env.local
```

3. Entre no server e crie o arquivo .env e copie o conteudo do .env.example:
```bash
  cd client
  touch .env
```

## Iniciar

1. Para mudar o ambiente mude no arquivo .env na raiz do projeto o ENVIRONMENT

```bash
  ENVIRONMENT=development --> Para desenvolvimento
  ENVIRONMENT=production --> Para produção
```

2. Apos todos os envs configurados rode o comando para buildar e rodar os containers
```bash
  docker-compose -f docker-compose.yml up --build
```

## Configuração 

1. Rode o comando a seguir para popular o banco de dados com algumas informacoes 
```bash
  docker exec -i serverDB psql -U strapi -d strapi < populate.sql
```