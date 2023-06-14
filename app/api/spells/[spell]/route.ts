import spells from "@/db/spells.json";

export async function GET(
  request: Request,
  { params }: { params: { spell: string } }
) {
  const { spell } = params;

  if (spell) {
    const spellString = spells.find(
      (s) => s.name.toLowerCase() === spell.toLowerCase()
    );
    if (spellString) {
      return new Response(JSON.stringify(spellString), {
        headers: { "content-type": "application/json" },
      });
    }
  }

  return new Response(`No spell with the name ${spell}`, {
    headers: { "content-type": "text/plain" },
  });
}
