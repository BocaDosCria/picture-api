import { FastifyInstance } from "fastify";

import pictures from "@/routes/pictures";
import users from "@/routes/users";

export async function appRoutes(app: FastifyInstance) {
  app.register(pictures, { prefix: "pictures" });
  app.register(users, { prefix: "users" });
}
