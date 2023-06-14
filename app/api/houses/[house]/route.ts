import characters from "@/db/characters.json";

export async function GET(
  request: Request,
  { params }: { params: { house: string } }
) {
  const { house } = params;
  const houses = ["gryffindor", "hufflepuff", "ravenclaw", "slytherin"];

  if (!houses.includes(house.toLowerCase())) {
    return new Response(`No house with name ${house}`, {
      headers: { "content-type": "text/plain" },
    });
  }

  const houseCharacters = characters.filter(
    (c) => c.house.toLowerCase() === house.toLowerCase()
  );

  return new Response(JSON.stringify(houseCharacters), {
    headers: { "content-type": "application/json" },
  });
}
