// Запросы:

// - post (для получения токена и для создания карточки
// - delete (для удаления карточки)
// - put (для удаления карточки)
// - get (для получения всех карточек)

import { URL } from "./constants.js";
import { loginHandler } from "./Login.js";

class Requests {
  static GET(URL) {
    return fetch(URL, {
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
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(
        data // вся инфа которую мы получаем в качестве ответа
      ),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.error(error));
  }

  static PUT(URL, editData) {
    return fetch(URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.error(error));
  }

  static DELETE(URL) {
    return fetch(URL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // уникальный токен юзера
      },
    }).then((response) => {
      return response.ok;
    });
  }

  static LOGIN_REQUEST(URL, credentials) {
    return fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        return response.text();
      })
      .catch((error) => console.error(error));
  }
}

export { URL, Requests };
