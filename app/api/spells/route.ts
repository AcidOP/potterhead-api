import spells from "@/db/spells.json";

export async function GET() {
  return new Response(JSON.stringify(spells), {
    headers: { "content-type": "text/plain" },
  });
}
