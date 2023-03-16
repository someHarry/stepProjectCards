// export default class ModalConfirmDelete{
//     constructor(template,id) {
//         this.template = template;
//         this.modal = this.template.querySelector('.modal').cloneNode(true);
//         this.id = id;
//     }
//     render(){
//         const modalTitle = this.modal.querySelector(".modal-title");
//         modalTitle.textContent = 'Точно удалить?';
//         const btnClose = this.modal.querySelector('.btn-close');
//         btnClose.textContent = 'Нет';
//         const btnOpen = document.createElement('button');
//         btnOpen.type = 'button';
//         btnOpen.className = "btn"
//         btnOpen.textContent = 'Да';
//         modalTitle.after(btnOpen)
//        return this.modal;
//     }
// }

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
// <button type="button" className="btn btn-primary">Save changes</button>