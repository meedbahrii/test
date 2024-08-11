import { InputJsonValue } from "../../types";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";

export type AudioCreateInput = {
  audioFile?: InputJsonValue;
  document?: DocumentWhereUniqueInput | null;
};
