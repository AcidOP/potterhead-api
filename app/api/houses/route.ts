export async function GET() {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

  return new Response(JSON.stringify(houses), {
    headers: { "content-type": "text/plain" },
  });
}
