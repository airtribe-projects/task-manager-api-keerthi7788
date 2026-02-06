
const repo = require("../repositories/task.repo");

const getAllTasks = async () => {
    const data = await repo.getAllTasks();
    console.log("Service layer - getAllTasks", data);
    return data;
};  

const getTask = async (id) => {
    const data = await repo.getTask(id);
    console.log("Service layer - getTask", data);
    return data;
};

const createTask = async (task) => {
    const data = await repo.createTask(task);
    console.log("Service layer - createTask", data);
    return data;
};

const updateTask = async (id, task) => {
    const data = await repo.updateTask(id, task);
    console.log("Service layer - updateTask", data);
    return data;
};

const deleteTask = async (id) => {
    const data = await repo.deleteTask(id);
    console.log("Service layer - deleteTask", data);
    return data;
};

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,  
}