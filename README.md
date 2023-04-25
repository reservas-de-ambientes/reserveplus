# Reservas

Sistemas de Reservas de ambientes

## Passo a passo

Entre no client e crie o arquivo .env.local e copie o conteudo do .env.example

```bash
  cd client
  touch .env.local
```

Volte para o arquivo padrao e faça o build com o Docker

```bash
  cd ..
  docker build -t reservas .
```

Apos terminar o build rode o comando para levantar o serviços do backend e frontend na porta 1337 e 3000

```bash
  docker run -p 3000:3000 -p 1337:1337 reservas
```