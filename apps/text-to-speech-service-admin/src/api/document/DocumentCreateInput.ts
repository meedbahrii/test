import { AudioCreateNestedManyWithoutDocumentsInput } from "./AudioCreateNestedManyWithoutDocumentsInput";
import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  audioItems?: AudioCreateNestedManyWithoutDocumentsInput;
  content?: string | null;
  file?: InputJsonValue;
  title?: string | null;
};
