class Render {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }

    renderData() {
        document.getElementById('id').innerText = `ID: ${this.id}`;
        document.getElementById('title').innerText = `TITLE: ${this.title}`;
        document.getElementById('body').innerText =  `BODY: ${this.body}`;
    }
}

export default Render;