para iniciar o node
npm init -y

instalar o typescript e os types integrado com o node
npm i typescript @types/node -D

para criar um arquivo de configuracao do typescript
npx tsc --init
copiar a tsconfig da versao do node pelo git hub, procurar na internet tsconfig bases

para converter o javascript para typescript, instalar tsx
npm i tsx -D

criar pasta src onde ficara toda a api
e criar o arquivo ts
para rodar, basta rodar npx tsx watch src/server.ts

para deixar no npm run dev, tem que criar um script no package.json



instalar as dependencias
npm i fastify

instalar o prisma
npm i prisma -D

para iniciar o prisma
npx prisma init --datasource-provider mysql

depois de configurar o banco com as tabelas rodar
npx prisma migrate dev

criei a pasta lib dentro de src, para ver as querys que vou mandar ao meu banco

criei a pasta routes para criar cada rota separada por arquivos

baixei o framework zod
npm i zod

para integrar o zod com o fastify 
procurar fastify zod no google, vai ter o git hub
instalar fastify provider zod
npm i fastify-type-provider-zod

colocar as 2 linhas app para aplicacao e importar

sempre que for criar uma rota agora colocar o withTypeProvider<ZodTypeProvider>()

baixar a biblioteca dayjs
npm i dayjs

instalar a bibli nodemailer para envio de emails
npm i nodemailer

instalar o fastify /cors para nao acessar pelo front os arquivos do node
npm i @fastify/cors


frontend

primeiro vou instalar o vite
npm create vite@latest

rodar um npm i para baixar as dependencias

instalar o tailwind css
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwind init -p

instalar o lucid para icons
npm i lucide-react