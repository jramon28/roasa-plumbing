import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQs",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "question", subtitle: "answer" },
  },
});
