import { db, Like } from "astro:db";

export async function POST(): Promise<Response> {
    try {
        await db.insert(Like).values({ id: "1" });
        
        return new Response(JSON.stringify({ message: "Like added successfully" }), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to add like", error: error}), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
