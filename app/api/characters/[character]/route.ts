import characters from "@/db/characters.json";

export async function GET(
  request: Request,
  { params }: { params: { character: string } }
) {
  const { character } = params;

  if (character) {
    const characterString = characters.find(
      (c) => c.name.toLowerCase() === character.toLowerCase()
    );
    if (characterString) {
      return new Response(JSON.stringify(characterString), {
        headers: { "content-type": "application/json" },
      });
    }
  }

  return new Response(`No character with name ${character}`, {
    headers: { "content-type": "text/plain" },
  });
}
