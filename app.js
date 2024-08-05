const express  = require("express");
const app = express();

app.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World!");
})

// Additionally added get today's date
app.get("/date", (request, response) => {
    let date = new Date();
    response.send(`Today date is : ${date}`); 
})
app.listen(3000);