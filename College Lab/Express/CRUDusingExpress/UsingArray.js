const express = require('express');
const app = express();

const students = ['Rashi' , 'Pretty' , 'Smart' , 'Focused'];

//Read
app.get('/students',(req,res)=>{
    res.send(students);
});
app.get('/students/:id',(req,res)=>{
    res.send(students[req.params.id]);
});

//Create
app.post('/students/:name',(req,res)=>{
     students.push(req.params.name);
     res.send('Student added successfully');
});

//Update
app.patch('/students/:idx/:name',(req,res)=>{
    students[req.params.idx] = req.params.name;
    res.send('Student updated successfully');
});

//Delete
app.delete('/students/:idx',(req,res)=>{
    students.splice(req.params.idx,1);
    res.send('Student deleted successfully');
});

app.listen(4567,()=>{
    console.log('listening on port 4567');
})
