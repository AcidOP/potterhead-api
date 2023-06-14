import books from "@/db/books.json";

export async function GET() {
  return new Response(JSON.stringify(books), {
    headers: { "content-type": "application/json" },
  });
}
