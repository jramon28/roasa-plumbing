import { defineField, defineType } from "sanity";

export const businessType = defineType({
  name: "business",
  title: "Business Info",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Business Name", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "phoneHref", title: "Phone Href (tel:...)", type: "string" }),
    defineField({ name: "textHref", title: "Text Href (sms:...)", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "website", title: "Website", type: "string" }),
    defineField({ name: "license", title: "License Number", type: "string" }),
    defineField({ name: "serviceArea", title: "Service Area", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "formspreeId", title: "Formspree Form ID", type: "string" }),
    defineField({ name: "tagline", title: "Nav Tagline", type: "string" }),
    defineField({
      name: "navLinks",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Href", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({ name: "footerDescription", title: "Footer Description", type: "text", rows: 2 }),
    defineField({
      name: "footerQuickLinks",
      title: "Footer Quick Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Href", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({ name: "hoursWeekday", title: "Weekday Hours", type: "string" }),
    defineField({ name: "hoursWeekend", title: "Weekend Hours", type: "string" }),
    defineField({ name: "emergencyNote", title: "Emergency Note", type: "string" }),
  ],
  preview: {
    select: { title: "name" },
  },
});
