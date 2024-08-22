const express = require("express");

const app = express();
require('dotenv').config()
app.use(express.json());



app.get("/", (req, res) => {
    res.json(
        { message: "Welcome to the Express API!" }
    )
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));