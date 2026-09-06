import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
});

const PHOTOS = [
  { file: "water-heater.JPG", caption: "Water Heater Installation", description: "Bradford White tank install with copper supply lines", order: 1 },
  { file: "repiping.JPG", caption: "Repiping", description: "Full copper repipe. Old lines out, new lines in.", order: 2 },
  { file: "valve-repair.JPG", caption: "Leak & Valve Repair", description: "Shower valve access and repair behind tile", order: 3 },
  { file: "water-line.JPG", caption: "Water Line Repair", description: "Underground water line replacement", order: 4 },
  { file: "sewer-line.JPG", caption: "Sewer Line Installation", description: "New sewer main installation and trenching", order: 5 },
  { file: "foundation.JPG", caption: "New Construction Plumbing", description: "Underground rough-in for new construction build", order: 6 },
];

async function seedGallery() {
  console.log("🌱 Uploading gallery photos to Sanity...\n");

  for (const photo of PHOTOS) {
    const filePath = path.resolve(process.cwd(), "public/gallery", photo.file);
    const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
      filename: photo.file,
    });

    await client.createOrReplace({
      _type: "galleryPhoto",
      _id: `gallery-${photo.order}`,
      photo: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
      caption: photo.caption,
      description: photo.description,
      order: photo.order,
    });

    console.log(`✓ ${photo.caption}`);
  }

  console.log("\n✅ Done! Open your Studio to see the gallery photos.");
}

seedGallery().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
