const js = require('json-server');
const server = js.create();
const mid = js.defaults();
const router = js.router('data.json');
const port = 8080;
const express = require("express");
const app = express();

app.use(mid);
app.use("/users",router);

app.get("/get",async(req,res)=>{
    // let data = await fetch('http://localhost:3000/users').then((res) => {
    //     res.json();
    // }).then((data) => {
    //     console.log(data)
    //     return data;
    // })
    res.status(200).send(data);
})
//get data
// fetch('http://localhost:3000/users').then((res) => {
//     res.json();
// }).then((data) => {
//     console.log(data)
// })

//post data
// fetch('http://localhost:3000/users', {
//     'method': 'POST',
//     'headers': { 'Content-Type': "application/json" },
//     'body': JSON.stringify({
//         name: String,
//         createdOn: String,
//         gender: String,
//         dob: String,
//         city: String,
//         state: String,
//         pincode: Number,
//         modifiedOn: String
//     })
// }).then((res) => {
//     res.json();
// }).then((data) => {
//     console.log(data)
// }).catch((err) => { console.log(err) })


app.listen(port, () => {
    console.log(`json server listening on port ${port}`)
})