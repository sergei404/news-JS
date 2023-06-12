import { NewsType } from "./news-types";
import { SourcesType } from "./sourses-types";

export interface DataInterface {
  draw: (data: SourcesType[] | NewsType[]) => void
}