const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.static("public"));

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", (req, res) => {
    res.send({ msg : 9090});
    // res.status(200).sendFile("index.html", { root: __dirname + "/public" });
});
app.get("/test", (req, res) => {
    // res.send({ msg : 9090});
    res.status(200).sendFile("index.html", { root: __dirname + "/public" });
});
app.listen(process.env.PORT || 4000, () => console.log('server is listner'))












// app.get('/test', (err, res) => {
//     // res.setHeader("Access-Control-Allow-Origin: *")
//     let html = `<style>#mySidenav a {
//         position: absolute; /* Position them relative to the browser window */
//         right: -100px; /* Position them outside of the screen */
//         transition: 0.3s; /* Add transition on hover */
//         padding: 15px; /* 15px padding */
//         width: 150px; /* Set a specific width */
//         text-decoration: none; /* Remove underline */
//         font-size: 20px; /* Increase font size */
//         color: white; /* White text color */
//         border-radius: 5px 0 0 5px; /* Rounded corners on the top right and bottom right side */
//       }
//       .flex-container{
//        display:flex;
//        flex-direction:row;
//       }
//       #mySidenav a:hover {
//         right: 0; /* On mouse-over, make the elements appear as they should */
//       }
//       #placeholder{
//         padding-right:25px;
//         margin: auto auto;
//       }
//       #content-body{
//         height:100px
//       }

//       /* The about link: 20px from the top with a green background */

//       #blog {
//         top: 80px;
//         background-color: #464CE4; /* Blue */
//       }
//       </style>
//       <div id="mySidenav" class="sidenav">
//       <a href="#" id="blog">
//       <div class="flex-container">
//       <div id="placeholder" ><</div>
//       <div id="content-body">
//       dsjfksldjf
//       </div>
//       </div>
//       </a>
//     </div>`;
//     res.send('html')
// })