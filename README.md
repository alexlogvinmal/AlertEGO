[Link to Github-Pages ](https://alexlogvinmal.github.io/AlterEGO/ "alexlogvinmal.github.io/AlterEGO")

## After you download repository please connect all dependencies

### `npm install`

## Then launch the React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Task:

**Реалізувати веб-застосунок, який вміє показувати наступні сторінки:**

- / - головна, довільний контент.
- /news – сторінка з новинами. можна використовувати мокові дані з https://jsonplaceholder.typicode.com/ або аналогічних сервісів. Реалізувати кнопку “завантажити ще” при кліку на яку дозавантажуються пости, реалізувати видалення новини.
- /profile - сторінка з довільним текстом, недоступна без авторизації.

**На сайті, у шапці чи підвалі реалізувати посилання:**

- На головну (/).
- Новини (/news).
- Профіль (/profile) або кнопка авторизуватися, якщо користувач не авторизований. 
- Реалізувати багатомовність для меню сайту (українська - uk, англійська - en) за допомогою react-i18next.

**Форма входу приймає "фейкові" дані:**

- username: admin
- password: 12345

**Якщо введено інші дані, відображається повідомлення:**

- Ім'я користувача або пароль введено неправильно.
- Якщо введені коректні дані, перенаправляти на сторінку /profile.
- Якщо спробувати перейти на сторінку /profile без авторизації має бути редірект на головну сторінку.

**ВИМОГИ ДО ОФОРМЛЕННЯ:**

- Інформацію про авторизацію користувача зберігати в localStorage. Якщо користувач авторизувався та перезавантажив сторінку, авторизація не повинна “пропадати”.
- Все необхідне на вашу думку, прокинути в Redux.
- Для оформлення (дизайну) використати material.ui
- Використовувати наступний стек: react, react-router-dom, react-redux, @reduxjs/toolkit, typescript
- Вихідний код викласти на github, так github-pages для демонстрації результату.