export default class Form{
    constructor(submitTitle , formHandler) {
        this.submitTitle = submitTitle;
        this.formHandler = formHandler;
    }
render(content){
      const form = document.createElement('form');
      const inputSubmit = document.createElement('input');
      inputSubmit.type = 'submit';
      inputSubmit.value = this.submitTitle;
      inputSubmit.className = "mt-2 btn btn-info text-light";
      form.addEventListener('submit', function (event){
          event.preventDefault();
         this.formHandler(event);
      }.bind(this))
      form.append(content, inputSubmit);
      return form;
}
}

