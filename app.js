const express = require("express");
const app = express();
const cors = require("cors");

const portfolioRouter = require("./routes/portfolio");
const connectDb = require("./db/Portfolio");

app.use(cors());
app.use(express.json());
app.use("/api/v1", portfolioRouter);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my portfolio back-end!");
});



const connect = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
    } catch (error) {
        console.log(error)
    }

};

connect()
