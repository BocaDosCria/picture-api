import { FastifyInstance } from "fastify";

import getAllPaginated from "@/http/controllers/pictures/get-all-paginated";
import getPictureDetails from "@/http/controllers/pictures/get-picture-details";

export default async function routes(route: FastifyInstance) {
  route.get("/:page", getAllPaginated);
  route.get("/details/:pictureId", getPictureDetails);
}
