import { defineField, defineType } from "sanity";

export const processStepsType = defineType({
  name: "processSteps",
  title: "Process Steps Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Step Number (e.g. 01)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "number" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
