import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Service Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "icon",
      title: "Icon Name (Lucide)",
      type: "string",
      description: "Lucide icon name: Droplets, Waves, Flame, Wrench, Shovel, GitBranch, Settings, AlertTriangle, Building2",
    }),
    defineField({ name: "href", title: "Page Slug (e.g. /services/leak-repairs)", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
