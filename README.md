# 🧩 CodeQuest - Backend 

***⚙️ Application under development... ⚙️***

## 🚀 How to start 
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
```

## Models
| `User`  | required  | unique  | index  | default  |
|---|---|---|---|---|
| _id  | ✅  | ✅  | ✅  | auto  |
| name  | ✅  | ❌  | ❌  | -  |
| username  | ✅  | ✅  | ✅  | -  |
| email  | ✅  | ✅  | ✅  | -  |
| password  | ✅  | ❌  | ❌  | -  |
| createdAt  | ✅  | ❌  | ❌  | auto  |
| updatedAt  | ✅  | ❌  | ❌  | auto  |

## What I Used 🛠️
*Below is a list of all the technologies and packages used in this project:*

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