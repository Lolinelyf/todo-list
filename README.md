# 📋 TodoList

Простой и удобный список задач (To-Do List), созданный с использованием современных технологий:
**React**, **Vite**, **Tailwind CSS**.
Задачи сохраняются в `localStorage`, так что они не исчезают после перезагрузки страницы [[3]](https://github.com/LeonardoSalvucci/react-tailwind-todo).

---

## 🔧 Функционал

- ✅ Добавление новой задачи
- ✏️ Редактирование существующей задачи
- ❌ Удаление задачи
- 💾 Все данные сохраняются в `localStorage`

---

## 🚀 Как запустить проект локально

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/ваше-имя/todo-list.git
   ```

2. Перейдите в папку проекта:

   ```bash
   cd todo-list
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Запустите проект:

   ```bash
   npm run dev
   ```

   После этого откройте [http://localhost:5173](http://localhost:5173) в браузере.

---

## 🛠 Технологии

- **React** — для построения интерфейса
- **Vite** — для быстрой сборки и разработки
- **Tailwind CSS** — для стилизации компонентов
- **localStorage API** — для хранения данных на клиенте [[6]](https://blog.csdn.net/weixin_45616989/article/details/138400101)

---

## 🗂 Структура проекта

```
.
├── .github
├── dist
├── node_modules
├── public
├── src
│   ├── assets
│   │   └── ... (ресурсы, такие как изображения или шрифты)
│   ├── components
│   │   ├── AddingTaskForm.jsx
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── EditTaskForm.jsx
│   │   ├── FloatingAddTaskButton.jsx
│   │   ├── Task.jsx
│   │   ├── TaskList.jsx
│   │   └── TitleMain.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── vite.config.js
```

---

### 📂 Описание директорий и файлов

#### `src/`

- **components/**
  - Здесь находятся все компоненты React, которые используются в приложении.
  - Например:
    - `AddingTaskForm.jsx`: Компонент для добавления новой задачи.
    - `EditTaskForm.jsx`: Компонент для редактирования существующей задачи.
    - `Task.jsx`: Компонент отображения одной задачи.
    - `TaskList.jsx`: Компонент списка всех задач.
    - `TitleMain.jsx`: Главный заголовок приложения.
- **App.jsx**: Главный компонент приложения.
- **main.jsx**: Точка входа в приложение.
- **index.css**: Глобальные стили Tailwind CSS.
- **assets/**: Папка для хранения ресурсов (например, изображений).

#### `public/`

- Содержит статические файлы, такие как `index.html`.

#### `.github/`

- Используется для настройки GitHub Actions и других автоматизаций.

#### `vite.config.js`

- Конфигурационный файл Vite.

#### `postcss.config.mjs`

- Конфигурация Tailwind CSS.

---

## 📦 Установка Tailwind CSS

Tailwind CSS был установлен и настроен согласно официальным рекомендациям для Vite-проектов. Для работы с классами Tailwind используется PostCSS и соответствующие конфигурационные файлы.

---

## 📝 Лицензия

Проект распространяется под лицензией MIT. Подробнее смотрите файл `LICENSE`.

---

> Этот проект идеально подходит для изучения React, Tailwind CSS и работы с локальным хранилищем. Также может служить шаблоном для более сложных приложений [[7]](https://juejin.cn/post/7224280627163996215).

---

### 🖼️ Пример структуры компонентов

Вот пример структуры компонентов в директории `src/components/`:

```
src/
└── components/
    ├── AddingTaskForm.jsx
    ├── Button.jsx
    ├── Container.jsx
    ├── EditTaskForm.jsx
    ├── FloatingAddTaskButton.jsx
    ├── Task.jsx
    ├── TaskList.jsx
    └── TitleMain.jsx
```

---

### 🤝 Вклад в проект

Если вы хотите внести свой вклад в проект:

1. Forkните этот репозиторий.
2. Создайте новую ветку: `git checkout -b feature/your-feature`.
3. Выполните изменения и сделайте коммит: `git commit -m "Add your feature"`.
4. Запушьте изменения: `git push origin feature/your-feature`.
5. Откройте Pull Request.

---

### 📬 Контакты

Если у вас возникли вопросы или предложения, пишите мне через GitHub Issues.
