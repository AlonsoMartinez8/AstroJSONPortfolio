import type { APIContext } from "astro";
import { db, Like } from "astro:db";

export async function GET(): Promise<Response> {
  try {
    const likes = (await db.select().from(Like)).length;
    return new Response(JSON.stringify({ likes: likes ? likes : 0 }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ likes: 0 }), {
      status: 200,
    });
  }
}
