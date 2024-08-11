import { AudioWhereInput } from "./AudioWhereInput";
import { AudioOrderByInput } from "./AudioOrderByInput";

export type AudioFindManyArgs = {
  where?: AudioWhereInput;
  orderBy?: Array<AudioOrderByInput>;
  skip?: number;
  take?: number;
};
