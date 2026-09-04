// Starts `next start` on a port if nothing answers there. Shared by the
// screenshot and Lighthouse scripts.
import { spawn } from "node:child_process";

export const PORT = Number(process.env.PORT || 3100);
export const BASE = `http://127.0.0.1:${PORT}`;

async function alive() {
  try {
    const r = await fetch(`${BASE}/`, { redirect: "manual" });
    return r.status < 500;
  } catch {
    return false;
  }
}

export async function ensureServer() {
  if (await alive()) return () => {};
  const child = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore", cwd: new URL("..", import.meta.url).pathname });
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await alive()) return () => child.kill();
  }
  child.kill();
  throw new Error("next start did not come up. Run `npm run build` first.");
}
