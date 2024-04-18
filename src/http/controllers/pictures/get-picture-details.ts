import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export default async function getAllPaginated(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const idParamsSchema = z.object({
    pictureId: z.string(),
  });

  const { pictureId } = idParamsSchema.parse(request.params);

  const test = { msg: "/get-picture-details" };

  return reply.status(200).send(test);
}
