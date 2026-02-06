
const service = require("../services/task.service");
const utils = require('../utils/task-validation')

const getAllTasks = async (req, res) => {
 const tasks = await service.getAllTasks();
 console.log("Controller layer - getAllTasks", tasks);
        res.json(tasks);
};

const getTask = async (req, res) => {
    const id =Number(req.params.id);
    const task = await service.getTask(id);
    if(!task){
        return res.status(404).json({message:"task not found"})
    }
    res.json(task);
};

const createTask = async (req, res) => {
     console.log("BODY:", req.body);
    const { title, description, completed } = req.body;

    if (!utils.isValidTask(title, description, completed)) {
        return res.status(400).json({ message: "Invalid input" });
    }
const newtask ={
    title,
    description,
    completed
};

    const task =  await service.createTask(newtask);
    res.status(201).json(task);
};

const updateTask = async (req, res) => {
    const { title, description, completed } = req.body;

    if (!utils.isValidTask(title, description, completed)) {
        return res.status(400).json({ message: "Invalid task data" });
    }

    const task = await service.updateTask(req.params.id, req.body);
        res.json(task);
    
};

const deleteTask = async (req, res) => {
    const id = Number(req.params.id);
    console.log("Deleting task with ID:", id);

    const deleted =  await service.deleteTask(id);
    if(!deleted){
        return res.status(400).json({message:"task not found"});
    }
    res.status(200).json(deletd);
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};