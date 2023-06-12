type Sourse = {
  id: string | null,
  name: string,
}

export type NewsType = {
  source: Sourse,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string
}