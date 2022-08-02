import { Document, Product, ParsedProduct } from "../types";

export function unpackDocument(doc: Document<Product>) {
  const parsedFields = {};

  // Deconstructing the garbage JSON Google API returns
  Object.keys(doc.fields).forEach((key: string) => {
    const value = Object.values(doc.fields[key as keyof Product])[0];
    parsedFields[key as keyof Object] = value;
  });

  const parsedDoc = { ...doc, fields: parsedFields } as Document<ParsedProduct>;
  return parsedDoc;
};