import characters from "@/src/characters.json";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");

  if (name) {
    const character = characters.find((character) => {
      return character.name.toLowerCase() === name.toLowerCase();
    });

    if (character) {
      return new Response(JSON.stringify(character), {
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(`No character with name ${name}`, {
      headers: { "content-type": "text/plain" },
    });
  }

  return new Response(JSON.stringify(characters), {
    headers: { "content-type": "application/json" },
  });
}
