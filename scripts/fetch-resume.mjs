import { mkdir, writeFile } from "node:fs/promises";

const RESUME_DIRECTORY = new URL("../public/resume/", import.meta.url);
const RESUME_SOURCE = new URL("https://raw.githubusercontent.com/krubenok/resume/main/resume.pdf");
const RESUME_TARGET = new URL("resume.pdf", RESUME_DIRECTORY);

const response = await fetch(RESUME_SOURCE);

if (!response.ok) {
  throw new Error(`Unable to fetch the current résumé: ${response.status} ${response.statusText}`);
}

await mkdir(RESUME_DIRECTORY, { recursive: true });
await writeFile(RESUME_TARGET, new Uint8Array(await response.arrayBuffer()));
