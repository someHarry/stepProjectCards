export default class Form{
    constructor(submitTitle ,content, formHandler) {
        this.submitTitle = submitTitle;
        this.content = content;
        this.formHandler = formHandler;

    }
render(){
      const form = document.createElement('form');
      const inputSubmit = document.createElement('input');
      inputSubmit.type = 'submit';
      inputSubmit.value = this.submitTitle;
      form.addEventListener('submit', function (event){
          event.preventDefault();
         this.formHandler();
      }.bind(this))
      form.append(this.content, inputSubmit);
      return form;
}
}

