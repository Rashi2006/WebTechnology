const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

let students = [
    {
        name: 'Rashi',
        id: 1,
        age: 18
    },
    {
        name:'Rushi',
        id:2,
        age:10
    }
];

//Read
app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:index',(req,res)=>{
     const ans = students.find(stu=>{
        return stu.id == req.params.index;
     });
     res.send(ans);
});

//SEARCH
app.get('/students/serach/:text',(req,res)=>{
    const ans = students.filter(stu=>{
        return stu.name.toLowerCase().includes(req.params.text.toLowerCase());
    });
    res.send(ans);
});

//Filter
app.get('/students/:from/:to' , (req,res)=>{
    const ans = students.filter(stu=>{
        return stu.age >= (req.params.from) && stu.age <= (req.params.to);
    });
    res.send(ans);
});

//create
app.post('/students',(req,res)=>{
     students.push(req.body);
     res.send('data posted');
});

//update
app.patch('/students/:id',(req,res)=>{
    // const ans = students.findIndex((stu)=>{
    //     if(stu.id==req.params.index){
    //         return true;
    //     }
    // });
    const idToUpdate = students.findIndex(stu => stu.id == req.params.id);
    data = req.body;
    students[idToUpdate]={...students[idToUpdate],...data};;
    res.send('data updated');
});

//delete
app.delete('/students/:id',(req,res)=>{
    const ans = students.findIndex(stu => stu.id == req.params.id);
    students.splice(ans,1);
    res.send('data deleted');
});


app.listen(4004, () => {
    console.log('listening on 4004');
});