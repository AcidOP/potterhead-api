export async function GET() {
  const routes = [
    "/api/characters",
    "/api/characters/harry potter (any character name)",
    "/api/houses",
    "/api/houses/gryffindor (any house name)",
    "/api/spells",
    "/api/spells/avada kedavra (any spell name)",
    "/api/movies",
    "/api/movies/1 [any movie id (1 to 8)]",
    "/api/books",
    "/api/books/3 [any book id (1 to 7)]",
  ];

  return new Response(JSON.stringify(routes), {
    headers: {
      "content-type": "application/json",
    },
  });
}
