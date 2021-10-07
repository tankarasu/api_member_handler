// Third-Party requirements
import Fastify, { FastifyInstance } from "fastify";

// CONSTANTS
export const fakeDatabase = [
  { name: "John" },
  { name: "Christopher" },
  { name: "Dona"}
]

// Function
export function buildServer(options = {}): FastifyInstance{
  const server = Fastify(options)
  // Routes
  server.get('/members', getAllBook)

  return server
}

async function getAllBook(): Promise<Member[]>{
  return fakeDatabase
}

// Type definition
interface Member {
  name: string
}
