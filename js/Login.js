const loginUrl = "https://ajax.test-danit.com/api/v2/cards/login"; // будет перенесено в файл с константами

let token = localStorage.getItem('token'); // Получаем token из local storage
if (!!token) {       // Проверяем, что получили
    // Если токен не null, прячем форму авторизации и показываем кнопку "Создать карточку"
    hide(loginButton);      // Надо будет создать функцию, которая навешивает класс hidden
    show(createCardButton); // ...и убирает его
}

// Якобы у нас есть форма, юзер ввёл туда логин-пароль, нажал "отправить" и у нас есть эти данные. Пока что просто переменная:
const credentials = {email:"your@email.com",password:"password"};
Requests.POST(loginUrl, credentials).then(tk => {    // Типа обработка события click на кнопке отправки
    token = tk;
    localStorage.setItem('token', token);
})
