import { FastifyInstance } from "fastify";

import register from "@/http/controllers/users/register";

export default async function routes(route: FastifyInstance) {
  route.post("/", register);
}
