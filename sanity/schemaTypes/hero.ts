import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "badgeText", title: "Badge Text", type: "string" }),
    defineField({ name: "headlineLine1", title: "Headline Line 1", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Line 2 (highlighted gold)", type: "string" }),
    defineField({ name: "headlineLine3", title: "Headline Line 3", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Name (Lucide)",
              type: "string",
              description: "e.g. ShieldCheck, Clock, Star, AlertTriangle",
            }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        },
      ],
    }),
    defineField({ name: "sideCardTitle", title: "Side Card Title", type: "string" }),
    defineField({
      name: "stats",
      title: "Side Card Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headlineLine1" },
  },
});
