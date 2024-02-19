export async function GET() {
  console.log('GET Request');

  const response = await fetch('http://localhost:3030/todos');
  const data = await response.json();

  return Response.json({ data });
}

export async function POST() {
  console.log('POST Request');
}
