const express = require("express");
const app = express();
const port = 3000;

const downloadRoute = require("./routes/download");
app.use("/", downloadRoute);

app.get("/", (req, res) => {
    res.send(`
        <p>API IS RUNNING!</p>
        <form action="/download" method="get">
        <label for="url">YouTube URL:</label><br>
        <input type="text" id="url" name="url" value=""><br>
        <input type="submit" value="Download">
        </form>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
