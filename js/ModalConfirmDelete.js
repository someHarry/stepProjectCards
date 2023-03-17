export default class ModalConfirmDelete{
    constructor(template,id) {
        this.template = template;
        this.modal = this.template.querySelector('.modalDelete').cloneNode(true);
        this.id = id;
    }
    render(){
        const modalTitle = this.modal.querySelector(".modal-title");
        modalTitle.textContent = 'Точно удалить?';
        return this.modal;
    }
}
