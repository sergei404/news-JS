import { DataInterface } from '../../types/data-interface';
import { DataNewsType, DataSoursesType } from '../../types/data-types';
import { NewsType } from '../../types/news-types';
import { SourcesType } from '../../types/sourses-types';
import News from './news/news';
import Sources from './sources/sources';


export class AppView {
    constructor(public news: News<DataInterface>, public sources: Sources<DataInterface>) {
    }

    drawNews(data: DataNewsType) {
        const values: NewsType[] = data.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: DataSoursesType) {
        const values: SourcesType[] = data.sources ?? []
        this.sources.draw(values); 
    }
}

export default AppView;
