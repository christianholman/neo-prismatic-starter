import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "../../../lib/prismadb";

// Configure NextAuth https://next-auth.js.org/configuration

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});
