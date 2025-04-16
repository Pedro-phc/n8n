# Docker possui instruções de instalação específicas para cada sistema operativo.
# Podemos consultar a documentação oficial no https://docker.com/get-started/

# Puxar ou extrair a imagem de Docker da Node.js:
docker pull node:18-alpine

# Criar um contentor de Node.js e iniciar uma sessão de Shell:
docker run -it --rm --entrypoint sh node:18-alpine

# Consultar a versão da Node.js:
node -v # Deveria imprimir "v18.20.8".

# Descarregar e instalar a pnpm:
corepack enable pnpm

# Consultar a versão da pnpm:
pnpm -v
