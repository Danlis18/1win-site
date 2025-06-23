
# 🎰 Angels Finance Promo Site

Це повністю адаптивний односторінковий сайт із серверною частиною для live-оновлень матчів. Готовий до завантаження на хостинг Render або Railway.

## 📁 Структура проєкту

```
project/
├── public/
│   ├── assets/
│   │   ├── img/
│   │   └── video/
│   ├── css/
│   ├── js/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## 🚀 Деплой на Render

1. Зайди на [https://render.com](https://render.com) і створи акаунт.
2. Створи новий Web Service → "Deploy from GitHub".
3. Завантаж цей проєкт на GitHub (папка `project/` як окремий репозиторій).
4. У Render:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: `.`
5. Натисни "Deploy".

## 🚀 Деплой на Railway

1. Перейди на [https://railway.app](https://railway.app) та створи акаунт.
2. Обери "Deploy from GitHub" або "New Project" → "Deploy from Zip".
3. Завантаж вміст `project_ready_for_deploy.zip`
4. Railway автоматично зчитає `package.json` і запустить сервер.

## 🛠 Старт локально

```bash
npm install
npm start
```
Відкрий у браузері: [http://localhost:3000](http://localhost:3000)

## 📡 API

```http
GET /api/matches
```
Повертає live-оновлення матчів (поки що симуляція).

## ✅ Технології

- Node.js + Express
- Bootstrap 5
- AOS.js, GSAP (анімація)
- Swiper.js (слайдер)
