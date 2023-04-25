# Use a imagem oficial do node como base
FROM node:18

# Define o diretório de trabalho como /app
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY server/package*.json ./server/
COPY client/package*.json ./client/

# Instale as dependências do cliente e do servidor
RUN cd server && npm install
RUN cd client && npm install

# Copie todos os arquivos do cliente e do servidor para o diretório de trabalho
COPY server/ ./server/
COPY client/ ./client/

# Exponha as portas do cliente e do servidor
EXPOSE 1337
EXPOSE 3000

# Defina o comando padrão para iniciar o cliente e o servidor
CMD ["sh", "-c", "cd server && npm run develop & cd client && npm run dev"]
