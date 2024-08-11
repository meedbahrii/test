import { AudioListRelationFilter } from "../audio/AudioListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  audioItems?: AudioListRelationFilter;
  content?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
