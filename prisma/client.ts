import { PrismaClient } from "@prisma/client"

interface Global {
  prisma: PrismaClient;
}

declare const global: Global;

const client = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = client;

export default client;
