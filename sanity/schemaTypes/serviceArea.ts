import { defineField, defineType } from "sanity";

export const serviceAreaType = defineType({
  name: "serviceArea",
  title: "Service Areas",
  type: "document",
  fields: [
    defineField({ name: "city", title: "City Name", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "city" },
  },
});
