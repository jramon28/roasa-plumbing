import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, SINGLETON_TYPES } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "roasa-plumbing",
  title: "ROASA Plumbing CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.includes(context.schemaType)
        ? input.filter(({ action }) => action && !["unpublish", "delete", "duplicate"].includes(action))
        : input,
  },
});
