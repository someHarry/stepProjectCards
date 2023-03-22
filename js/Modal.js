//При создании обьекта нужно передать template, title в виде текста и content в виде ДОМ
export default class Modal {
    constructor(template, title, content, id) {
        this.template = template;
        this.modal = this.template.querySelector('.modal').cloneNode(true);
        this.title = title;
        this.content = content;
        this.modal.id = id;
    }
    render() {
        const modalTitle = this.modal.querySelector(".modal-title");
        modalTitle.textContent = this.title;
        modalTitle.className = "text-info";
        const modalBody = this.modal.querySelector(".modal-body");
        modalBody.append(this.content);
        return this.modal;
    }
}

//для кнопки прописываем data-bs-toggle="modal" data-bs-target="#здесь задаем id"
// и для let mymodal = new Modal(modalTemplate, 'ewgrg','eg3rgrg', "здесь пишем id для сравнения с кнопкой (такую же, как и кнопки");

