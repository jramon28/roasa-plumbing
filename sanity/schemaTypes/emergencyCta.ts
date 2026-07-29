import { defineField, defineType } from "sanity";

export const emergencyCtaType = defineType({
  name: "emergencyCta",
  title: "Emergency CTA Bar",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "buttonText", title: "Button Text", type: "string" }),
  ],
  preview: {
    select: { title: "title" },
  },
});
