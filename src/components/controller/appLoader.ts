import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0ccf781575ee4d4c894e6afa814208bd',
        });
    }
}

export default AppLoader;
