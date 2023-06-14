import movies from "@/db/movies.json";

export async function GET() {
  return new Response(JSON.stringify(movies), {
    headers: { "content-type": "application/json" },
  });
}
