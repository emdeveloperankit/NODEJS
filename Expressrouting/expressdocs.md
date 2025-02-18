# **📌 Chapter 6: Introduction to Express.js**

## **1️⃣ What is Express.js?**
Express.js is a **fast, unopinionated, and minimal web framework** for Node.js. It simplifies the process of creating **web servers, APIs, and handling HTTP requests**.

### ✅ **Why use Express?**
| Feature | Description |
|---------|------------|
| **Easy Routing** | Simple syntax for handling different URLs |
| **Middleware** | Process requests before sending responses |
| **Static File Serving** | Serve HTML, CSS, JS files easily |
| **Database Integration** | Works well with MongoDB, MySQL, PostgreSQL |

---

## **2️⃣ Installing Express.js**
Express is installed using `npm`.
```sh
npm install express
```
✅ **Verify Installation:**
```sh
npm list express
```

---

## **3️⃣ Creating a Simple Express Server**
### **📌 Basic Express Server**
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
✅ **Run the server:**
```sh
node server.js
```
✅ **Visit in browser:**  
- Open `http://localhost:3000/` → Shows `"Hello, Express!"`

---

## **4️⃣ Handling HTTP Requests (`GET`, `POST`, `PUT`, `DELETE`)**
### **📌 Handling GET Requests**
```js
app.get('/user', (req, res) => {
    res.send('User Page');
});
```
✅ **Visit:** `http://localhost:3000/user`

### **📌 Handling POST Requests**
```js
app.use(express.json());

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    res.send(`User ${name} with email ${email} created`);
});
```

✅ **Test with Postman:**
```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"John","email":"john@example.com"}' http://localhost:3000/user
```

---

## **5️⃣ Routing in Express**
Routing allows handling **multiple endpoints**.

```js
app.get('/about', (req, res) => res.send('About Page'));
app.get('/contact', (req, res) => res.send('Contact Page'));
```
✅ **Visit:**
- `http://localhost:3000/about`
- `http://localhost:3000/contact`

---

## **6️⃣ Serving Static Files (CSS, Images, JS)**
To serve static files, use `express.static()`.
```js
app.use(express.static('public'));
```
✅ **Create a `public/` folder and add `style.css`**
```css
body { background: black; color: white; }
```
✅ **Access in browser:** `http://localhost:3000/style.css`

---

## **7️⃣ Middleware in Express**
Middleware are **functions that run before handling requests**.

### **📌 Custom Middleware Example**
```js
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url} - Method: ${req.method}`);
    next();
});
```
✅ **Now every request is logged in the terminal!**

---

## **8️⃣ Error Handling in Express**
If a route does not exist, we handle **404 errors**.
```js
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});
```
✅ **Visit:** `http://localhost:3000/xyz` (Shows 404 error)

---

## **9️⃣ Connecting Express to MongoDB**
### **📌 Install Mongoose**
```sh
npm install mongoose
```

### **📌 Connect to MongoDB**
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error:', err));
```

### **📌 Define a Schema**
```js
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', UserSchema);
```

### **📌 Create a User API**
```js
app.post('/addUser', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send('User added');
});
```
✅ **Test with Postman:**
- URL: `http://localhost:3000/addUser`
- Method: `POST`
- Body (JSON):
  ```json
  { "name": "John", "email": "john@example.com" }
  ```

---

## **📌 Summary Table**
| Feature | Express.js Method |
|---------|------------------|
| **Create Server** | `express()` |
| **Handle GET Requests** | `app.get('/path', callback)` |
| **Handle POST Requests** | `app.post('/path', callback)` |
| **Handle PUT Requests** | `app.put('/path', callback)` |
| **Handle DELETE Requests** | `app.delete('/path', callback)` |
| **Serve Static Files** | `express.static('folder')` |
| **Middleware** | `app.use(middlewareFunction)` |
| **Error Handling** | `app.use((req, res) => { res.status(404).send() })` |
| **MongoDB Connection** | `mongoose.connect('mongodb://localhost:27017/db')` |

---

## **🚀 Next Steps**
✅ **Practice**: Build a small API with Express.js.  
✅ **Experiment**: Connect Express to MongoDB and perform CRUD.  
✅ **Learn More**: Read [Express.js Documentation](https://expressjs.com/).
