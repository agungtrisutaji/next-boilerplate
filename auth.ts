import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// Auth.js (next-auth v5) configuration
export const { handlers, auth, signIn, signOut } = NextAuth({
  // With AUTH_GITHUB_ID and AUTH_GITHUB_SECRET in env, this works without extra params
  providers: [GitHub],
  // Optional: explicitly set secret; will default to AUTH_SECRET if present
  secret: process.env.AUTH_SECRET,
});
