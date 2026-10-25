# Engineering CRM — Корпоративное веб-приложение

Публичный сайт (одностраничник) + CRM-панель для инженерного сервиса.

## Стек

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **ORM**: Prisma 5
- **БД**: SQLite (файл `prisma/dev.db`)
- **Медиа**: локальное хранилище `public/uploads/`

## Быстрый старт

```bash
npm install
npm run db:setup
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Демо-доступ (CRM)

| Роль | E-mail | Пароль | Права |
|------|--------|--------|-------|
| Администратор | admin@company.com | Admin123! | Полный доступ |
| Сотрудник | ivan@company.com | Ivan123! | Чтение и запись |
| Сотрудник | petr@company.com | Petr123! | Только чтение |

Вход: `/login`

## Структура проекта

```
engineering-crm/
├── prisma/          # Схема БД + seed
├── public/uploads/  # Медиафайлы работ
├── src/
│   ├── app/         # Страницы (публичные + CRM) и API
│   ├── lib/         # Утилиты (prisma, auth, permissions)
│   └── components/  # React-компоненты
```

## Публичная часть

- `/` — одностраничник (Hero, О нас, Услуги+цены, Портфолио, Партнёры, CTA)
- `/contacts` — Контакты + форма обратной связи
- `/login` — Вход в CRM

## CRM (защищённая зона)

- `/admin` — Дашборд
- `/admin/calendar` — Календарь планирования
- `/admin/works` — Выполненные работы (с медиа)
- `/admin/reports` — Отчёты о выездах
- `/admin/clients` — Справочник клиентов
- `/admin/requests` — Заявки (статусы, приоритеты)
- `/admin/users` — Управление пользователями (админ)
- `/admin/settings` — Настройки SEO, sitemap, кэш, логи (админ)