import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    // Ping the admin database to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    return Response.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
