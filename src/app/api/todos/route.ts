export async function GET() {
  console.log('GET Request');

  const response = await fetch('http://localhost:3030/todos');
  const data = await response.json();

  return Response.json({ data }, { status: 200 });
}

export async function POST(request: Request) {
  console.log('POST Request');

  const body = await request.json();
  fetch('http://localhost:3030/todos', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return Response.json({ data: body }, { status: 201 });
}
