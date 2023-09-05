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
  yarn 
  ou 
  npm install
```

3. Crie o arquivo .next com o comando:
```bash
  yarn build
  ou
  npm run build
```

3. Instale as dependências do Back-end (server):
```bash
  cd nome-do-projeto
  cd server
  yarn 
  ou 
  npm install
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

## Primeiro acesso Strapi

1. Crie sua conta ADM no Strapi na rota
```bash
  http://0.0.0.0:1337/admin
```

2. Rode o comando a seguir para popular o banco de dados com algumas informacoes como um usuario Admin, semestres 2023.1 e 2023.2
```bash
  docker exec -i serverDB psql -U strapi -d strapi < populate.sql
```

3. No Strapi, acesse Setting > Roles

4. No Authenticated, em permissions: 
- Ambience > Select All
- Reservation > Select All
- Semester > Select All
- Users-permissions > USER > Select All

5. No Public, em permissions: 
- Ambience > findOne e find
- Reservation > findOne e find
- Semester > findOne e find
- Users-permissions > USER > findOne, find e me
