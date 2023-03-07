// Запросы:

// - post (для получения токена и для создания карточки
// - delete (для удаления карточки)
// - put (для удаления карточки)
// - get (для получения всех карточек)

const URL = "https://ajax.test-danit.com/api/v2/cards/"; // link / запрос на получение всех карточек
let token = "5db4c838-6625-4594-b0ea-4feb25002fe6";
let data = { email: "your@email.com", password: "password" };
let editData = {
  age: "31",
  description: "bvdfoibh",
  fullname: "Головко",
  id: 112035,
  name: "Аліна",
  nickname: "Іванівна",
  target: "dofih",
  urgency: "Звичайна",
};

class Requests {
  static GET(URL) {
    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  }

  static POST(URL, data) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        data // вся инфа которую мы получаем в качестве ответа
      ),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  }

  static PUT(URL, editData) {
    fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.error(error));
  }

  static DELETE(URL) {
    fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // уникальный токен юзера
      },
    }).then((response) => {
      console.log(response);
      return response.ok;
    });
  }
}
