import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedHd = (process.env.ALLOWED_HD ?? "techbbq.org").toLowerCase();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          hd: allowedHd,
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ profile }) {
      const hd = (profile as { hd?: string } | undefined)?.hd?.toLowerCase();
      const email = profile?.email?.toLowerCase() ?? "";
      const matchesHd = hd === allowedHd;
      const matchesEmailDomain = email.endsWith(`@${allowedHd}`);
      if (matchesHd || matchesEmailDomain) return true;
      return "/unauthorized";
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
