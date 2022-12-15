# README

# Fastify-Prisma App Test
Fastify-Prisma back-end API application test

## INSTALATION
- Install NodeJS from [NodeJS download](https://nodejs.org/en/download/).
- Download HeidiSQL from [HeidiSQL download](https://www.heidisql.com/download.php).
- Open project in vscode.
- Run the following command `npm install`, it could take some minutes.
- Create .env file in the root of the project and write the following code
    - ```DATABASE_URL="mysql://root:@localhost:3306/prisma_gs"```.
    - If necessary change the values for your database connection using the following syntax mysql://<ins>**user**</ins>:<ins>**password**</ins>@<ins>**localhost**</ins>:<ins>**3306**</ins>/prisma_gs.\
    More information in [Prisma docs](https://www.prisma.io/docs/concepts/database-connectors/mysql)
- Run the command `npx prisma migrate dev --name init`, to create the database and execute migrations.

## RUN
- To start server run in terminal `npm run dev` and you could see the console output.

## PREVIEW
- To see the app open in your browser http://localhost:3000
- Visit http://localhost:3000/docs to see API Documentation

## PRISMA
- Use `prisma migrate dev --name migration_name` after modify schema to make changes in database.

## TEST