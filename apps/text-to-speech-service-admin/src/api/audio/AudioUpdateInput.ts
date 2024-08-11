import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AudioUpdateInput = {
  audioFile?: InputJsonValue;
  document?: DocumentWhereUniqueInput | null;
};
