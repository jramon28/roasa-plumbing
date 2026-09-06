import { defineField, defineType } from "sanity";

export const whyChooseUsType = defineType({
  name: "whyChooseUs",
  title: "Why Choose Us Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Intro Paragraphs",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({ name: "ctaText", title: "CTA Button Text", type: "string" }),
    defineField({
      name: "badges",
      title: "Badge Grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Name (Lucide)",
              type: "string",
              description: "e.g. Cross, Heart, Star, ShieldCheck, UserCheck, Medal",
            }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        },
      ],
    }),
    defineField({ name: "reasonsSectionLabel", title: "Reasons Section Label", type: "string" }),
    defineField({ name: "reasonsTitle", title: "Reasons Title", type: "string" }),
    defineField({
      name: "reasons",
      title: "Reasons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Name (Lucide)",
              type: "string",
              description: "e.g. ShieldCheck, Clock, DollarSign, Star, UserCheck, Phone",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
