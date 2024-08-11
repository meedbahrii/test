import { AudioUpdateManyWithoutDocumentsInput } from "./AudioUpdateManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  audioItems?: AudioUpdateManyWithoutDocumentsInput;
  content?: string | null;
  file?: InputJsonValue;
  title?: string | null;
};
