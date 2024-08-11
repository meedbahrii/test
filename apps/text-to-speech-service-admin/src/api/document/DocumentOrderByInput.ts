import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
