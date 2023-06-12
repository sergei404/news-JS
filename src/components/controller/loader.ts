type Options = {
    apiKey: string
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

class Loader {
    constructor(private baseLink: string, private options: Options) {
    }

    getResp(
        { endpoint, options }: { endpoint: string; options: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string) {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key] ? urlOptions[key] : ""}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: string, callback:, options: Options): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
