import characters from "@/db/characters.json";

export async function GET() {
  return new Response(JSON.stringify(characters), {
    headers: { "content-type": "application/json" },
  });
}
