import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export default async function getAllPaginated(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestParamsSchema = z.object({
    page: z.string(),
  });

  const { page } = requestParamsSchema.parse(request.params);

  const test = { msg: "/get-all-paginated" };

  return reply.status(201).send(test);
}
