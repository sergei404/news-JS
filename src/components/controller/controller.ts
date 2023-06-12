import { NewsType } from '../../types/news-types';
import { SourcesType } from '../../types/sourses-types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback,
    }

    getNews(e: Event, callback: (() => void)) {
        let target = e.target as HTMLDivElement;
        const newsContainer = e.currentTarget as HTMLDivElement;

        while (target !== newsContainer) {
            if (target) {
                if (target.classList.contains('source__item')) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
            }

            target = target.parentNode;
        }
    }
}

export default AppController;
