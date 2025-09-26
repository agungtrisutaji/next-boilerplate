import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div style={{ padding: 24 }}>
      <h1>Protected</h1>
      <p>Welcome, {session.user?.name || session.user?.email}</p>
    </div>
  );
}
