# 🧩 CodeQuest - Backend

**_⚙️ Application under development... ⚙️_**

## 🚀 How To Start

1. 📦 **Install dependencies:** Run the following command to install all required packages: `npm install`

2. 📂 **Set up the environment variables:** Create a `.env` file in the root directory and add the following content.

3. 🏃 **Start the application:** Run the following command to start the server: `npm run start`

4. 🌍 **Access the application:** Open your browser and go to: `http://localhost:PORT`

5. **🎉 You're all set! Happy coding!**

## 🌱 Environment Variables

```python
# The server's port (8080, 3000, ect..)
PORT =

# Database configuration
MONGO_URI =

# API key (if left empty, no password is required to use the application)
API_KEY =
```

## Models 🧩

| `User`    | required | unique | index | default |
| --------- | -------- | ------ | ----- | ------- |
| \_id      | ✅       | ✅     | ✅    | auto    |
| name      | ✅       | ❌     | ❌    | -       |
| username  | ✅       | ✅     | ✅    | -       |
| email     | ✅       | ✅     | ✅    | -       |
| password  | ✅       | ❌     | ❌    | -       |
| createdAt | ✅       | ❌     | ❌    | auto    |
| updatedAt | ✅       | ❌     | ❌    | auto    |

## Error Handling 🪲

Due to unified client-side error messages, I created an error handler. Errors are located in the `/error` folder, while handling is implemented in `errorHandler.middleware.js`. The `next()` function forwards the error as an object, selecting the appropriate message based on the `code`. If no message is provided, a default server error is triggered. Errors may optionally or mandatorily include additional parameters (e.g., `path`, `message`, `type`).
| `errors` | code | message | type | value | path |
|---|---|---|---|---| --- |
| validation | 400 | array | ✅ | optional | ❌ |
| validation schema | ❌ | ✅ | ❌ | ❌ | ❌ |
| authentication | 401 | ❌ | optional | optional | optional |
| server | 500 | optional | ❌ | ❌ | ❌ |

## What I Used 🛠️

_Below is a list of all the technologies and packages used in this project:_

- 📌 **Core Technologies**
  - **Node.js** – JavaScript runtime
  - **Express.js** – Web framework for Node.js
- 📦 **NPM Packages**
  - **dotenv** – Load environment variables from a .env file
  - **cors** – Enable Cross-Origin Resource Sharing
    development
  - **mongoose** – MongoDB ODM (if using MongoDB)
- 🛠️ **Development Tools**
  - **nodemon** – Automatic server restart during
  - **Postman** – API testing
