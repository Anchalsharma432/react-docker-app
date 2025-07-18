# 🚀 React + Docker App

A simple React application containerized using Docker. This project was created as part of **Anchal Sharma's Full Stack Development coursework at Lambton College**.

---

## 📚 Project Description

This React app is bundled and served using Nginx through a Docker container. The goal was to learn how to containerize a frontend application and make it production-ready using Docker best practices.

---

## 📸 Screenshot

> _(Replace with an actual screenshot if needed)_

![App Screenshot](https://via.placeholder.com/800x400?text=React+App+Screenshot)

---

## 🏗️ Technologies Used

- ⚛️ React
- 🐳 Docker
- 🧅 Nginx
- 📦 Node.js & npm

---

## 📂 Project Structure

```
anchal_assign2/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── public/
├── src/
└── README.md
```

---

## 🐳 How to Run with Docker

### 1. Clone the Repo

```bash
git clone https://github.com/Anchalsharma432/react-docker-app.git
cd react-docker-app
```

### 2. Build Docker Image

```bash
docker build -t react-docker-app .
```

### 3. Run Docker Container

```bash
docker run -d -p 3000:80 react-docker-app
```

✅ Open your browser at: **http://localhost:3000**

---

## 📄 Dockerfile Overview

```Dockerfile
# Step 1: Build the React app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🧾 .gitignore

```gitignore
node_modules
build
.dockerignore
Dockerfile
npm-debug.log
.env
```

---

## 🙋‍♀️ Author

**Anchal Sharma**  
📧 anchal@example.com  
🔗 [GitHub Profile](https://github.com/Anchalsharma432)

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

> ✅ _This README is optimized for assignments, hackathons, or portfolio projects. Let me know if you'd like to generate a professional PDF or add deployment instructions (like Netlify, Vercel, or Docker Hub)._
