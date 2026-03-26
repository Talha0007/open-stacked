import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin } from "better-auth/plugins";

// List of Open Stacked Admins
const ADMIN_EMAILS = ["dev.talha.ai@gmail.com", "umairhameed634@gmail.com"];

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  plugins: [admin()],

  advanced: {
    database: {
      generateId: false, // Correct: Let Prisma/MongoDB handle User IDs
    },
  },

  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          if (ADMIN_EMAILS.includes(user.email)) {
            await prisma.user.update({
              where: { id: user.id },
              data: { role: "admin" },
            });
          }
        },
      },
    },
  },
});
