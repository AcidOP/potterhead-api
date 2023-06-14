import movies from "@/db/movies.json";

export async function GET(
  request: Request,
  { params }: { params: { serial: string } }
) {
  const { serial } = params;

  if (serial) {
    const spellString = movies.find(
      (s) => s.serial.toLowerCase() === serial.toLowerCase()
    );
    if (spellString) {
      return new Response(JSON.stringify(spellString), {
        headers: { "content-type": "application/json" },
      });
    }
  }

  return new Response(`No movie with serial number ${serial}`, {
    headers: { "content-type": "text/plain" },
  });
}

