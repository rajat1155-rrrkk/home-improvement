import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("public/images/services");

const targets = [
  ["hero-indian-home.jpg", "home repair technician india"],
  ["plumbing.jpg", "plumber repairing sink"],
  ["electrical.jpg", "electrician repairing switchboard"],
  ["carpentry.jpg", "carpenter working wood"],
  ["painting.jpg", "house painter wall"],
  ["ac-repair.jpg", "air conditioner repair technician"],
  ["ro-service.jpg", "water purifier service technician"],
  ["home-cleaning.jpg", "home cleaning service"],
  ["appliance-repair.jpg", "appliance repair technician"],
  ["tile-flooring.jpg", "tile flooring installation"],
  ["modular-kitchen.jpg", "modular kitchen interior"],
  ["waterproofing.jpg", "building waterproofing work"],
  ["false-ceiling.jpg", "false ceiling gypsum work"],
];

async function searchImageUrl(query) {
  const apiUrl = new URL("https://commons.wikimedia.org/w/api.php");
  apiUrl.searchParams.set("action", "query");
  apiUrl.searchParams.set("generator", "search");
  apiUrl.searchParams.set("gsrsearch", query);
  apiUrl.searchParams.set("gsrnamespace", "6");
  apiUrl.searchParams.set("gsrlimit", "8");
  apiUrl.searchParams.set("prop", "imageinfo");
  apiUrl.searchParams.set("iiprop", "url");
  apiUrl.searchParams.set("iiurlwidth", "1400");
  apiUrl.searchParams.set("format", "json");
  apiUrl.searchParams.set("origin", "*");

  const res = await fetch(apiUrl, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) return null;

  const data = await res.json();
  const pages = Object.values(data?.query?.pages || {});

  for (const page of pages) {
    const imageInfo = page?.imageinfo?.[0];
    const candidate = imageInfo?.thumburl || imageInfo?.url;
    const title = String(page?.title || "").toLowerCase();
    if (!candidate) continue;
    if (title.includes("icon") || title.includes("logo") || title.includes("svg")) continue;
    return candidate;
  }

  return null;
}

async function download(url, fileName) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await writeFile(path.join(outputDir, fileName), buffer);
}

await mkdir(outputDir, { recursive: true });

for (const [fileName, query] of targets) {
  try {
    const imageUrl = await searchImageUrl(query);
    if (!imageUrl) {
      console.log(`No image found for ${fileName} (${query})`);
      continue;
    }
    await download(imageUrl, fileName);
    console.log(`Downloaded ${fileName} from ${imageUrl}`);
  } catch (error) {
    console.log(`Failed ${fileName}: ${error.message}`);
  }
}
