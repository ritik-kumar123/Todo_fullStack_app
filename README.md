# 📝 Todo App Backend

This is the backend for a full-stack Todo App built with **Node.js**, **Express**, and **MongoDB**, featuring user authentication and todo CRUD APIs.

✅ **Frontend Live**: [LIVE DEMO](https://todo-fullstack-app-1-89e1.onrender.com)
🔗 **GitHub**: [GITHUB](https://github.com/ritik-kumar123)

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication (stored in HTTP-only cookies)
- CORS for secure frontend/backend communication
- Axios in frontend for API requests

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-backend.git
cd todo-backend
```

2. Install Dependencies
   npm install

3. Set Up Environment Variables
  Create a .env file in the root:

  PORT=4002
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET_KEY=your_jwt_secret
  FRONTEND_URL=http://localhost:5173

4. Run the Server

npm run dev     # if using nodemon
# or
node index.js   # default

Server will run at:
http://localhost:4002

🌐 API Endpoints
🔑 Auth (/user)

| Method | Endpoint    | Description             |
| ------ | ----------- | ----------------------- |
| POST   | `/register` | Register a new user     |
| POST   | `/login`    | Log in user             |
| GET    | `/profile`  | Get logged-in user info |
| POST   | `/logout`   | Log out user            |

📝 Todos (/todo)
| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Get all todos     |
| POST   | `/`      | Create a new todo |
| PUT    | `/:id`   | Update todo by ID |
| DELETE | `/:id`   | Delete todo by ID |

📃 License
Licensed under the MIT License.

🔗 Live Frontend
👉 https://todo-fullstack-app-1-89e1.onrender.com





