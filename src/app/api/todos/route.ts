export async function GET() {
  try {
    const response = await fetch('http://localhost:3030/todos');
    if (Math.floor(response.status / 100) === 4) {
      return Response.json({}, { status: response.status });
    }

    const data = await response.json();

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({}, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const response = await fetch('http://localhost:3030/todos', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (Math.floor(response.status / 100) === 4) {
      return Response.json({}, { status: response.status });
    }

    return Response.json({ data: body }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({}, { status: 500 });
  }
}
