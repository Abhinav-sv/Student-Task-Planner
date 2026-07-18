const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tasks = [
    {
        id: 1,
        title: "Study DBMS",
        description: "Read Chapter 5",
        date: "2026-07-20",
        completed: false
    },
    {
        id: 2,
        title: "Complete Internship Project",
        description: "Finish backend APIs",
        date: "2026-07-22",
        completed: false
    }
];

app.get("/", (req, res) => {
    res.send("Student Task Planner API Running");
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {

    const { title, description, date } = req.body;

    if (!title || !description || !date) {
        return res.status(400).json({
            message: "Please fill all fields"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        date,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});