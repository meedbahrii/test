import { JsonFilter } from "../../util/JsonFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AudioWhereInput = {
  audioFile?: JsonFilter;
  document?: DocumentWhereUniqueInput;
  id?: StringFilter;
};
