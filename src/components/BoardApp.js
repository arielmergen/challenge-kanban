import React, { useContext } from "react";

import { KanbanContext } from "./../kanbanContext";
import { TaskItems } from "./TaskItems";
import { FormTaks } from "./FormTaks";

import "./css/style.css";

export const BoardApp = () => {
    const { tasks, setTasks } = useContext(KanbanContext);
    return (
        <div className="wrapper">
            <FormTaks tasks={tasks} setTask={setTasks} />
            <TaskItems tasks={tasks} setTask={setTasks} />
        </div>
    );
};
