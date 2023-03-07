export default class Modal {
    constructor(template) {
        this.template = template;
        this.modal = this.template.querySelector('.modal').cloneNode(true);
    }

    render() {
        return this.modal;
    }

    static close() {

    }
}

