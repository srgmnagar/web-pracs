const express = require('express');

const app = express();
app.use(express.urlencoded({encoded:true}));
app.use(express.json());
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/view.html");
});

app.post("/users",(req,res)=>{
    const {name,email}=req.body;
    const newUser={
        id:users.length+1,
        name:name,
        email:email
    }
    users.push(newUser);
    res.send("User added successfully");

})

app.get("/users", (req, res) => {
//   let list = "<h2>User List</h2>";

//   users.forEach(user => {
//     list += `<p>${user.id}. ${user.name} - ${user.email}</p>`;
//   });

//   list += `<br><a href="/">Add New User</a>`;

  res.json(users);
});


// Start server
const PORT =  3000;
app.listen(PORT, () => {
	console.log(`Express server listening on http://localhost:${PORT}`);
});