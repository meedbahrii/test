import { JsonValue } from "type-fest";
import { Document } from "../document/Document";

export type Audio = {
  audioFile: JsonValue;
  createdAt: Date;
  document?: Document | null;
  id: string;
  updatedAt: Date;
};
