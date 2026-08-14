// Inject the server-rendered app into dist/index.html so the page is complete
// static HTML before React hydrates (and readable with JS disabled).
import { readFile, writeFile, rm } from "node:fs/promises";

const { render } = await import("../dist-ssr/entry-server.js");

const htmlPath = new URL("../dist/index.html", import.meta.url);
const template = await readFile(htmlPath, "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-html--> placeholder");
}

await writeFile(htmlPath, template.replace("<!--app-html-->", render()));
await rm(new URL("../dist-ssr/", import.meta.url), { recursive: true, force: true });

console.log("prerendered dist/index.html");
