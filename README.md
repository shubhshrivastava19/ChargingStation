# ChargingStation Backend 
#  Charging Station Management System (Backend)

This is the backend service for the Charging Station Management System built using **Node.js**, **Express.js**, and **MongoDB**. It provides RESTful APIs to manage users, charging stations, and their details.

---

##  Features

- User registration & login with JWT authentication
- CRUD operations for charging stations
- Protected routes for station management
- MongoDB database integration using Mongoose
- Input validation and error handling

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **JWT (JSON Web Tokens)**
- **dotenv**
- **bcryptjs**
- **cors**
- **nodemon** (for development)

---

## 📁 Router Structure (Backend) : -
user login/signup :-

router.post('/register', register);
router.post('/login', login);

charging station curd :-

router.post('/createStation', auth, createStation);
router.get('/', auth, getStations);
router.put('/:id', auth, updateStation);
router.delete('/:id', auth, deleteStation);

working on localhost 3009 (backend)

# frontend :- in vue js
# chargingStation

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



### Also uses leaflet for open source map 

## screenshot of the output ui : --
<img width="1440" height="707" alt="Screenshot 2025-07-23 at 6 53 59 PM" src="https://github.com/user-attachments/assets/876d64b5-7f78-4a4d-9bdc-c3f54cc03a41" />
<img width="1440" height="669" alt="Screenshot 2025-07-23 at 6 53 39 PM" src="https://github.com/user-attachments/assets/28768c89-e42e-4e01-ba25-93d9f26e7ecb" />


