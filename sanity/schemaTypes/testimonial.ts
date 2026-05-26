import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Customer Name", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "rating", title: "Rating (1–5)", type: "number" }),
    defineField({ name: "text", title: "Review Text", type: "text", rows: 4 }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      options: { list: ["Yelp", "Google", "Facebook", "Direct"] },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "text" },
  },
});
