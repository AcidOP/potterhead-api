export async function GET(request: Request) {
    const url = new URL(request.url);
    const name = url.searchParams.get('name') || 'World';

    return new Response(`Hello ${name}!`, {
        headers: { 'content-type': 'text/plain' },
    });
}