import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = Bun.serve({
  port: 4000,
  async fetch(request) {
    const data = await prisma.user.findMany();
    return new Response("Welcome to Bun!" + data.length);
  },
});

console.log(`Listening on localhost:${server.port}`);
