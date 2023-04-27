# Use a imagem oficial do node como base
FROM node:18

# Define o diretório de trabalho como /app
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do cliente e do servidor
RUN npm install

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY . .

# Exponha as portas do cliente e do servidor
EXPOSE 1337

# Defina o comando padrão para iniciar o cliente e o servidor
CMD ["npm", "run", "develop"]
