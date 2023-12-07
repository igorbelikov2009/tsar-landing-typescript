### `npm start`

1. `npx create-react-app my-app --template typescript` Создадим приложение с помощью CRA с TypeScript.
2. `npm i react-router-dom` Установим React Router DOM
3. `npm i @types/react-router-dom` Типы для React Router DOM
4. `npm i -D typescript-plugin-css-modules` Установим плагин типизации стилей
5. `npm i scss-react npm i -D sass` установим препроцессоры SCSS и SASS
6. `npm install react-hook-form` Валидация полей формы
7. Копируем в tsconfig.json
   `"plugins": [
  {
    "name": "typescript-plugin-css-modules"
  }
]`
8. Через политру команда настаиваем версию `typescript`, после чего появляется папка `.vscode` и в ней создаётся файл `settings.json`
9. `npm install react-bootstrap bootstrap` в файл index.html вставляем ссылку

 <link

rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
crossorigin="anonymous"
/>

10. `npm i react-select` Устанавливаем react-select. React-select предоставляет свои собственные определения типов, поэтому вам не нужно устанавливать @types/react-select!
