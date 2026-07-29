import { defineField, defineType } from "sanity";

export const trustStripType = defineType({
  name: "trustStrip",
  title: "Trust Strip Badges",
  type: "document",
  fields: [
    defineField({
      name: "badges",
      title: "Badges",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon Name (Lucide)",
              type: "string",
              description: "e.g. ShieldCheck, Star, Clock, Award, DollarSign, Wrench",
            }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "badges.0.label" },
  },
});
