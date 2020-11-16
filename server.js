const express = require("express");
const app = express();
const path = require("path");
const members = require("./Members.js");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const whiteListedRoutes = require("./whiteListedRoutes.js");

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

//initialise middleware
//app.use(logger);

//handlebars middleware
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", ".hbs");
app.set("views", __dirname);



//render hbs
// app.get('/', (req, res) => {
//   res.render("index.hbs", { title: "I am a handlebar created by rishu" });
// });


whiteListedRoutes.forEach(eachRoute => {
  app.get(eachRoute.name, (req, res) => {
    res.render("index.hbs", { title: "I am a handlebar created by rishu" });
  });
})




// app.get("/form", (req, res) => {
//   res.render("index.hbs", { title: "I am a handlebar created by rishu" });
// });

//body parser middleware
app.use(express.json());

//for sumbmission middleware
app.use(express.urlencoded({ extended: false }));

//Members api route ('/api/members' as parent path)
app.use("/api/members", require("./routes/api/members"));

//for serving static servers
//use app.use for middlewares
//usually put all statics in public folder and use app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`HI! Server is running on ${PORT}`));
