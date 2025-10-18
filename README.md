# Doloni Space

Статичний двомовний веб-сайт для Doloni Space, створений з використанням Vite та Bootstrap.

## 🚀 Особливості

- **Двомовність**: Українська (основна) та англійська мови
- **Адаптивний дизайн**: Bootstrap 5 для всіх пристроїв
- **SEO оптимізація**: Meta теги, Open Graph, canonical URLs
- **Юридичні сторінки**: Політика конфіденційності, Умови використання, Контакти
- **Функціональність друку**: Кнопки для друку та збереження як PDF
- **Hot Reload**: Швидка розробка з Vite dev сервером
- **GitHub Pages Ready**: Готово до деплою на GitHub Pages

## 📁 Структура проекту

```
/
├── public/                     # Статичні файли (копіюються в dist як є)
│   └── images/                 # Зображення: логотип, favicon, тощо
├── src/
│   ├── index.html              # Головна сторінка (UA)
│   ├── privacy.html            # Політика конфіденційності (UA)
│   ├── terms.html              # Умови використання (UA)
│   ├── contacts.html           # Контакти (UA)
│   ├── 404.html                # Сторінка помилки (двомовна)
│   ├── en/                     # Англійські версії
│   │   ├── index.html
│   │   ├── privacy.html
│   │   ├── terms.html
│   │   └── contacts.html
│   ├── partials/               # Handlebars шаблони
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── css/
│   │   └── custom.css          # Кастомні стилі
│   └── js/
│       └── main.js             # JavaScript логіка
├── dist/                       # Згенеровані файли (для деплою)
├── package.json
├── vite.config.js
└── README.md
```

## 🛠 Встановлення

### Вимоги

- Node.js 16+ та npm

### Крок 1: Клонування репозиторію

```bash
git clone https://github.com/yourusername/doloni.space.git
cd doloni.space
```

### Крок 2: Встановлення залежностей

```bash
npm install
```

## 💻 Розробка

### Запуск dev сервера

```bash
npm run dev
```

Сайт буде доступний за адресою `http://localhost:5173` з hot reload.

### Білд для production

```bash
npm run build
```

Згенеровані файли будуть у папці `dist/`.

### Перегляд білду локально

```bash
npm run preview
```

## 🌐 Деплой на GitHub Pages

### Варіант 1: Ручний деплой

1. Зробіть білд проекту:

   ```bash
   npm run build
   ```

2. Скопіюйте вміст папки `dist/` у корінь вашого GitHub Pages репозиторію

3. Створіть файл `.nojekyll` у кореневій папці:

   ```bash
   touch .nojekyll
   ```

4. Закомітьте та запушіть зміни:

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. Увімкніть GitHub Pages у налаштуваннях репозиторію:
   - Settings → Pages → Source: Deploy from a branch
   - Branch: main, folder: / (root)

### Варіант 2: GitHub Actions (рекомендовано)

Створіть файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Після пушу в `main` гілку, сайт автоматично деплоїться.

## 🎨 Кастомізація

### Додавання логотипу та зображень

1. Покладіть файли в `public/images/`:
   - `logo.svg` або `logo.png` - логотип сайту
   - `favicon.png` або `favicon.ico` - favicon
   - Інші зображення

2. Файли автоматично копіюються в `dist/images/` при білді

3. Використання в HTML:
   ```html
   <img src="/images/logo.svg" alt="Logo">
   ```

### Зміна контенту

- **Українські сторінки**: редагуйте файли в `src/`
- **Англійські сторінки**: редагуйте файли в `src/en/`
- **Header/Footer**: редагуйте `src/partials/header.hbs` та `src/partials/footer.hbs`

### Зміна стилів

Редагуйте `src/css/custom.css` для зміни кольорів, шрифтів та інших стилів.

### Зміна JavaScript

Редагуйте `src/js/main.js` для зміни функціональності (TOC, друк, тощо).

### SEO налаштування

Змініть meta теги у `vite.config.js` в об'єкті `pageData`.

## 📱 Функціональність

### Перемикач мови

- Автоматично відображається в header на всіх сторінках
- Зберігає поточну сторінку при перемиканні мови

### Table of Contents (TOC)

- Автоматично генерується з H2 заголовків на юридичних сторінках
- Плавна прокрутка до розділів

### Друк та PDF

- Кнопка "Роздрукувати" для швидкого друку
- Кнопка "Завантажити як PDF" (відкриває діалог друку з можливістю збереження як PDF)
- Оптимізовані стилі для друку

### Адаптивний дизайн

- Мобільна версія (< 768px)
- Планшетна версія (768px - 1024px)
- Десктопна версія (> 1024px)

## 🔧 Технології

- **Vite** - швидкий білдер та dev сервер
- **Handlebars** - шаблонізатор для header/footer
- **Bootstrap 5** - CSS фреймворк
- **Vanilla JavaScript** - без додаткових фреймворків

## 📄 Ліцензія

MIT License

## 📞 Контакти

- Email: info@doloni.space
- Website: https://doloni.space

---

Створено з ❤️ для Doloni Space
