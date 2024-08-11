import { AudioWhereUniqueInput } from "./AudioWhereUniqueInput";
import { AudioUpdateInput } from "./AudioUpdateInput";

export type UpdateAudioArgs = {
  where: AudioWhereUniqueInput;
  data: AudioUpdateInput;
};
