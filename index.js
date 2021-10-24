const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { name: "shabana", id: 0, email: "shabana@gmail.com" },
  { name: "salman", id: 1, email: "salman@gmail.com" },
  { name: "sonam", id: 2, email: "sonam@gmail.com" },
  { name: "alia", id: 3, email: "alia@gmail.com" },
  { name: "ahona", id: 4, email: "ahona@gmail.com" },
  { name: "nahar", id: 5, email: "nahar@gmail.com" },
  { name: "ripa", id: 6, email: "ripa@gmail.com" },
];

//using middleware cors to send data
app.use(cors());

app.use(express.json());

//app.METHOD
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic url
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

//retrive search users
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get("/users", (req, res) => {
  res.send(users);
});

// app.get('/',(req,res)=>{
//     res.send('Hello from my first Node App & i am very excited to learn Node yeeeeeeeeeee')
// })

app.listen(port, () => {
  console.log("this is port", port);
});
