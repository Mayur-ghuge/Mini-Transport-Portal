<img width="1710" height="1017" alt="Screenshot 2025-12-07 at 1 09 46 PM" src="https://github.com/user-attachments/assets/5bebe9eb-bac2-4a8f-aa37-161e8ca89ea2" />🚛 Mini Transport Portal
A smart transport portal built with React, Spring Boot & MySQL for vehicle management, user authentication, and a feedback system.

✨ Overview
The Mini Transport Portal allows customers to:
Create an account
Log in securely
Search vehicles by type & location
Add their own vehicles
Submit feedback (rating + optional message)
This project demonstrates a complete full-stack web application with authentication, data filtering, and CRUD operations.

🚀 Features

✔️ User Login & Registration
✔️ Add Vehicle (type, number plate, location, contact number)
✔️ Search Vehicles (filtered by type & location)
✔️ Display Vehicle List with details
✔️ Submit Feedback (rating + comment)
✔️ MySQL data persistence
✔️ Modern UI with React + CSS
✔️ Secure backend built with Spring Boot

🛠️ Tech Stack
Frontend :- React,HTML,CSS,JavaScript

Backend :- Java,Spring Boot,Maven,Database,

Database :- MySQL

📂 Project Structure
~/Downloads/mini-transport-portal
│
├── frontend/               # React Application (UI)
│   ├── public/
│   ├── src/
│   ├── package.json
│
├── backend/                # Spring Boot Backend API
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│
└── README.md

⚙️ Backend Setup (Spring Boot)
1️⃣ Navigate to backend folder :- cd backend
2️⃣ Run the backend :- ./mvnw spring-boot:run
3️⃣ Backend URL :- http://localhost:8080

💻 Frontend Setup (React)
1️⃣ Navigate to frontend folder :- cd frontend
2️⃣ Install dependencies :- npm install
3️⃣ Start the React app :- npm start
4️⃣ Frontend URL :- http://localhost:3000

🗄️ Database Schema (MySQL)

📌 users Table
| Field    | Type         |
| -------- | ------------ |
| name     | VARCHAR(50)  |
| password | VARCHAR(100) |

📌 vehicles Table
| Field        | Type        |
| ------------ | ----------- |
| type         | VARCHAR(50) |
| number_plate | VARCHAR(20) |
| location     | VARCHAR(50) |
| mobile       | VARCHAR(15) |

📌 feedback Table
| Field   | Type      |
| ------- | --------- |
| rating  | INT (1–5) |
| comment | TEXT      |

🔗 API Endpoints
| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/vehicle/add`    | Add new vehicle                  |
| GET    | `/vehicle/search` | Search vehicles by type/location |

Vehicle APIs
| Method | Endpoint          | Description                      |
| ------ | ----------------- | -------------------------------- |
| POST   | `/vehicle/add`    | Add new vehicle                  |
| GET    | `/vehicle/search` | Search vehicles by type/location |

Feedback APIs
| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | `/feedback/add` | Submit feedback |

🖼️ Screenshots
### 🔹 Login Page
![Login Page](assets/screenshots/img1.png)

### 🔹 Vehicle Selection
![Vehicle Selection](assets/screenshots/img2.png)

### 🔹 Create Account
![Create Account](assets/screenshots/img3.png)

### 🔹 Add Vehicle
![Add Vehicle](assets/screenshots/img4.png)

### 🔹 Feedback Page
![Feedback Page](assets/screenshots/img5.png)





























