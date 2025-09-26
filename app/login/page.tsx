"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    return (
      <div style={{ padding: 24 }}>
        <p>Signed in as {session.user?.email || session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 24 }}>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
