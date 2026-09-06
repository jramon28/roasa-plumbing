import type { StructureResolver } from "sanity/structure";
import { SINGLETON_TYPES } from "./schemaTypes";

const SINGLETONS: { id: string; title: string }[] = [
  { id: "business", title: "Business Info" },
  { id: "hero", title: "Hero Section" },
  { id: "whyChooseUs", title: "Why Choose Us Section" },
  { id: "processSteps", title: "Process Steps Section" },
  { id: "emergencyCta", title: "Emergency CTA Bar" },
  { id: "trustStrip", title: "Trust Strip Badges" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETON_TYPES.includes(item.getId() as string)
      ),
    ]);
