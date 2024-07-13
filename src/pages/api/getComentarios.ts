import { db, Comment } from "astro:db";

export async function GET(): Promise<Response> {
  try {
    const comments = (await db.select().from(Comment)).reverse();
    return new Response(JSON.stringify({ comentarios: comments }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ comentarios: [] }), {
      status: 200,
    });
  }
}
