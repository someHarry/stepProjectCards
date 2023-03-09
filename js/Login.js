let token = localStorage.getItem('token'); // Получаем token из local storage

function checkToken (){
    if (!!token) {       // Проверяем, получили ли мы токен, если токен не null, прячем форму авторизации и показываем кнопку "Создать карточку"
        // hide(loginButton);      // Надо будет создать функцию, которая навешивает класс hidden
        // show(createCardButton); // ...и убирает его
    }
}


// Якобы у нас есть форма, юзер ввёл туда логин-пароль, нажал "отправить" и у нас есть эти данные. Пока что просто переменная:
const credentials = {email:"your@email.com",password:"password"};

function loginHandler(credentials){
    Requests.POST(loginUrl, credentials).then(tk => {    // Типа обработка события click на кнопке отправки
        token = tk;
        localStorage.setItem('token', token);
    })
}


export {token, checkToken, loginHandler}