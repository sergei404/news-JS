import { NewsType } from '../../../types/news-types';
import './news.css';

class News<T> {
    draw(data: NewsType[]): void {
        const news: NewsType[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsType, idx: number): void => {
            const newsClone: Node = newsItemTemp?.content.cloneNode(true);
            if (newsClone instanceof DocumentFragment) {
                if (idx % 2) {
                    newsClone.querySelector('.news__item')!.classList.add('alt');
                }

                newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date')!.textContent = new Intl.DateTimeFormat()
                    .format(new Date(item.publishedAt))
                    .replace(/\./g, '-');

                newsClone.querySelector('.news__description-title')!.textContent = item.title;
                newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
                newsClone.querySelector('.news__description-content')!.textContent = item.description;
                newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                fragment.append(newsClone);
            } else {
                throw new Error('newsClone is not instanceof DocumentFragment');
            }
        });

        const newsElem: Element | null = document.querySelector('.news');
        if (newsElem) {
            newsElem.innerHTML = '';
            newsElem.appendChild(fragment);
        }
    }
}

export default News;
