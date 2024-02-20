export async function GET(_: Request, { params }: { params: { id: string } }) {
  if (!params.id) {
    Response.json({}, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:3030/todos/${params.id}`);
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

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params.id) {
    Response.json({}, { status: 400 });
  }

  const body = await request.json();

  try {
    const response = await fetch(`http://localhost:3030/todos/${params.id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    if (Math.floor(response.status / 100) === 4) {
      return Response.json({}, { status: response.status });
    }

    return Response.json({ data: body }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({}, { status: 500 });
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  if (!params.id) {
    Response.json({}, { status: 400 });
  }

  try {
    const response = await fetch(`http://localhost:3030/todos/${params.id}`, {
      method: 'DELETE',
    });
    if (Math.floor(response.status / 100) === 4) {
      return Response.json({}, { status: response.status });
    }

    return Response.json({}, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({}, { status: 500 });
  }
}
