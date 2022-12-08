# README

# magiei-api-v1
MaGiEi back-end API application

## INSTALATION
- Install NodeJS from https://nodejs.org/en/download/.
- Download HeidiSQL from https://www.heidisql.com/download.php.
- Open project in vscode.
- Run the following command `npm install`, it could take some minutes.
- Run the command `prisma init --url mysql://root:@localhost:3306/prisma_gs`, this will create a file named `.env`, check the file content and change the value of DATABASE_URL if necessary.
    - The syntax is the following: mysql://**user**:**password**@localhost:**3306**/prisma_gs.
- Run the command `npx prisma migrate dev --name init`, this will create the database and execute migrations.

## RUN
- To start server run in terminal `npm run dev` and you could see the console output.

## PREVIEW
- To see the app open in your browser http://localhost:3000
- Visit http://localhost:3000/docs to see API Documentation