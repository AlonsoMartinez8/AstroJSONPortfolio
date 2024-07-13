import type { APIContext } from "astro";
import { db, Comment } from "astro:db";

export async function POST(context: APIContext): Promise<Response> {
  try {
    const body = await context.request.json();
    const comentario = body.comentario;

    if (!comentario) {
      return new Response(
        JSON.stringify({ message: "Comentario is required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    await db.insert(Comment).values({ id: "1", comment: comentario });

    return new Response(
      JSON.stringify({
        message: "Comment added successfully",
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to add comment",
        error: error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
