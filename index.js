import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/about", (req, res) => {
    res.render("about.ejs");
});
app.get("/benefits", (req, res) => {
    res.render("benefits.ejs");
});
app.get("/faq", (req, res) => {
    res.render("faq.ejs");
});
app.get("/fees", (req, res) => {
    res.render("fees.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/tos", (req, res) => {
    res.render("tos.ejs");
});
app.get("/privacy-policy", (req, res) => {
    res.render("privacy-policy.ejs");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port: ${port}`);
})