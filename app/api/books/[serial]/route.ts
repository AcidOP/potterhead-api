import books from "@/db/books.json";

export async function GET(
  request: Request,
  { params }: { params: { serial: string } }
) {
  const { serial } = params;

  if (serial) {
    const book = books.find(
      (s) => s.serial.toLowerCase() === serial.toLowerCase()
    );
    if (book) {
      return new Response(JSON.stringify(book), {
        headers: { "content-type": "application/json" },
      });
    }
  }

  return new Response(`No book with serial number ${serial}`, {
    headers: { "content-type": "text/plain" },
  });
}

