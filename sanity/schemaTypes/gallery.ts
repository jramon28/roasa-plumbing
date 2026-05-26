import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "galleryPhoto",
  title: "Gallery Photos",
  type: "document",
  fields: [
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "caption", subtitle: "description", media: "photo" },
  },
});
