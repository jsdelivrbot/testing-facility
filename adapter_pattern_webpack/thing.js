class Thing {
    constructor(name, url, type) {
        this._name = name;
        this._url = url;
        this._type = type;
    }

    getName() {
        return `${this._type} name: ${this._name}`;
    }

    getUrl() {
        return `${this._url}`;
    }
}

export default Thing;