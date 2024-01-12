import { users } from "@/data/users";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUsers = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUsers && currentUsers.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUsers;
          return userWithoutPass as User;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
