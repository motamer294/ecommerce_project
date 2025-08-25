<<<<<<< HEAD
node js task for NTI MEAN STACK internship
=======
# E-commerce Backend (Node + Express + MongoDB)

## Setup
1. `cp .env.sample .env` and fill values.
2. `npm install`
3. `npm run dev` (or `npm start`)

## Routes
- Users: `/api/users` (GET), `/api/users/register` (POST), `/api/users/login` (POST), `/api/users/:id` (PUT, DELETE)
- Email verify: `/api/users/verify/:email` (GET)
- Products: `/api/products` (GET, POST*, PATCH*, DELETE*) *Admin only
- Orders: `/api/orders` (POST), `/api/orders/my` (GET), `/api/orders` (GET*) *Admin only
- Posts demo: `/api/posts` (GET, POST*, PATCH*, DELETE*) *Auth needed

## Auth
- Send header: `Authorization: Bearer <token>`
>>>>>>> 6c2f66a (Refactor backend: unified ES Modules, added auth middleware)
