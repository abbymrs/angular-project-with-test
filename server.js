const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.get("Origin"));
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});

app.use(cookieParser("managetest"));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});

app.post("/api/search", (req, res) => {
    const random = Math.random() * (10 - 1) + 1;
    try {
        let payload = req.body;
        if (random >= 5) {
            res.json({
                url: payload.url,
                message: "ok",
                status: 1
            });
        } else {
            res.json({
                url: payload.url,
                message: "error occurs",
                status: 0
            });
        }
    } catch (err) {
        console.log(
            "------------------------------------------------------------"
        );
        console.log("登录接口:" + err);
        console.log(
            "------------------------------------------------------------"
        );
        res.statusCode = 500;
        return res.json({ status: 10, errorMessage: "服务器异常" });
    }
});

app.get("/api/auth", (req, res) => {
    const random = Math.floor(Math.random() * (10 - 1) + 1);
    switch (true) {
        case random < 3:
            return res.json({
                status: 200.1,
                message: "your account or password is incorrect!"
            });
        case random < 5:
            return res.json({
                status: 200.2,
                message: "you dont have permission to access this page!"
            });
        default:
            return res.json({
                status: 200,
                message: "ok~"
            });
    }
});
