const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
