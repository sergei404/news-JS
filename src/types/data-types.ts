import { NewsType } from "./news-types"
import { SourcesType } from "./sourses-types"

export type DataSoursesType = {
  status: string,
  sources: SourcesType[],
}

export type DataNewsType = {
  status: string,
  articles: NewsType[],
  totalResults: number,
}