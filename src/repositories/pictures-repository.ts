import { Prisma, Pictures } from "@prisma/client";

interface UsersRespository {
  create(data: Prisma.UserCreateInput): Promise<Pictures>;
  findByEmail(email: string): Promise<Pictures | null>;
}

export { UsersRespository };
