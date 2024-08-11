import { Audio } from "../audio/Audio";
import { JsonValue } from "type-fest";

export type Document = {
  audioItems?: Array<Audio>;
  content: string | null;
  createdAt: Date;
  file: JsonValue;
  id: string;
  title: string | null;
  updatedAt: Date;
};
