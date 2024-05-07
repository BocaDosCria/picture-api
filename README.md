### Install dependencies
`npm i`

### Run docker locally
`docker compose up`

### Setup local env
- Create `.env` from `.env.example`.
- Copy and paste:
```
NODE_ENV=dev
DATABASE_URL=postgresql://docker:docker@node-api-template-pg:5432/nodeapi?schema=public
```

### Run migrations locally
`npx prisma migrate dev`

----

### With hot-reload
1. `docker compose up picture-api-pg`
 1.1 `npx prisma migrate dev` (only for the first time)
2. `npm run start:dev`