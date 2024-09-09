const express = require('express');
const mongoose = require('mongoose');
const student = require('./student');
const bodyParser = require('body-parser');

const connectionString = "mongodb+srv://Rashi:RashiMongoDb@cluster0.bxyek.mongodb.net/MongoDBDemo";

mongoose.connect(connectionString).then(() => {
    console.log("connected with cloud DB");

    const app = express();
    app.use(bodyParser.urlencoded());

    app.get('/students', async (req, res) => {
        const ans = await student.find();
        res.send(ans);
    })

    app.get('/students/:id', async (req, res) => {
        const ans = await student.findOne({ rollNo: req.params.id });
        res.send(ans);
    });

    app.post('/students', async (req, res) => {
        stu = new student({ ...req.body });
        const ans = await stu.save();
        res.send(ans);
    })
    
    app.delete('/students/:id' , async (req, res) => {
        const ans = await student.deleteOne({rollNo: req.params.id});
        res.send(ans);
    })
    
    app.patch('/students/:id', async (req, res) => {
        const stu = await student.findOne({rollNo:req.params.id});
        stu.name = req.body.name;
        stu.grade = req.body.grade;
        stu.rollNo=req.body.rollNo;
        const ans = await stu.save();
        res.send(ans);
    })

    app.listen(4545, () => {
        console.log("Server is running on port 4545");
    })
});