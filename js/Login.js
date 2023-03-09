let token = localStorage.getItem('token'); // Получаем token из local storage

function isToken (){
    if (!!token) {       // Проверяем, получили ли мы токен, если токен не null, прячем форму авторизации и показываем кнопку "Создать карточку"
        // hide(loginButton);      // Надо будет создать функцию, которая навешивает класс hidden
        // show(createCardButton); // ...и убирает его
    }
}


// Якобы у нас есть форма, юзер ввёл туда логин-пароль, нажал "отправить" и у нас есть эти данные. Пока что просто переменная:
const TEMPORARYcredentials = {email:"your@email.com",password:"password"};

function loginHandler(credentials){
    Requests.POST(loginUrl, credentials)    // Типа обработка события click на кнопке отправки
        .then(tk => {
            token = tk;
            localStorage.setItem('token', token);
        })
        .then(isToken)
}


export {token, isToken, loginHandler, TEMPORARYcredentials}