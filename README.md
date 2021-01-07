<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description
This is board API server for testing NestJS and Prisma2

## Installation

```bash
$ npm install
```

## Set database
```bash
# prisma/.env
DATABASE_URL="mysql://user:password@localhost:3306/db"
```

## Create database tables with Prisma Migrate
```bash
npx prisma migrate dev --name init --preview-feature
```

## Running the app
```bash
# development
$ npm run start
```
