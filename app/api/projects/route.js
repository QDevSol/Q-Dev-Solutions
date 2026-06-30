import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'projects.json');

const readProjects = async () => {
  const file = await readFile(filePath, 'utf-8');
  return JSON.parse(file);
};

export async function GET() {
  try {
    const projects = await readProjects();
    return Response.json(projects);
  } catch {
    return Response.json([]);
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!Array.isArray(payload)) {
      return new Response('Invalid payload', { status: 400 });
    }
    await writeFile(filePath, JSON.stringify(payload, null, 2), 'utf-8');
    return Response.json({ ok: true });
  } catch {
    return new Response('Failed to save projects', { status: 500 });
  }
}
