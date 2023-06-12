import { DataSoursesType } from '../../types/data-types';
import { NewsType } from '../../types/news-types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

// class App {
//     constructor(public controller: AppController, public view: AppView){
//     }

//     start() {
//         document
//             .querySelector('.sources')
//             ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
//         this.controller.getSources((data) => this.view.drawSources(data));
//     }
// }

// export default App;

// import AppController from '../controller/controller';
// import AppView } from '../view/appView';

class App {
    // private controller: AppController;
    // private view: AppView;

    constructor(public controller: AppController, public view: AppView) {}

    public start(): void {
        const sourcesElem = document.querySelector('.sources');
        if (sourcesElem) {
            sourcesElem.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)))
        }
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
