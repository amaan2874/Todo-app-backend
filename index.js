// const express = require ('express');
// const app = express();

// require("dotenv").config();

// PORT = process.env.PORT || 4000 ; 

// app.use(express.json());

// const todoRoutes = require("./ruotes/todos");

// app.use("/api/v1",todoRoutes);

// app.listen(PORT,()=>{
//     console.log(`server started at port ${PORT}`);

// })

// const dbConnect = require("./config/database");
// dbConnect();
// app.get("/",(req,res)=>{
//     res.send("<h1>THIS IS HOME PAGE</h1>")
// })



const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();

require('dotenv').config();

PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
const todoRoutes = require('./ruotes/todos');
app.use('/api/v1', todoRoutes);

// Database Connection
const dbConnect = require('./config/database');
dbConnect();

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>THIS IS HOME PAGE</h1>');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
