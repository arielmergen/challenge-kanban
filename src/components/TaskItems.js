import React from "react";

export const TaskItems = ({ tasks = [], setTask, handleTask }) => {
    const handleStatusTask = (id, typeStatus) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.status = typeStatus;
                return task;
            } else {
                return task;
            }
        });
        setTask(newTasks);
    };
    return (
        <div className="kanban">
            <div className="columns">
                <h3>Sin realizar</h3>
                {tasks
                    .filter((item) => item.status === 1)
                    .map((item) => (
                        <div className="row" key={item.id}>
                            <div className="task-item">
                                <h2 className="task-title">{item.taskDescription}</h2>
                                <div className="task-actions">
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 2)}>
                                        En proceso
                                    </button>
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 3)}>
                                        Realizado
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="columns">
                <h3>En proceso</h3>
                {tasks
                    .filter((item) => item.status === 2)
                    .map((item) => (
                        <div className="row" key={item.id}>
                            <div className="task-item">
                                <p>{item.taskDescription}</p>
                                <div className="task-actions">
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 1)}>
                                        Sin Realizar
                                    </button>
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 3)}>
                                        Realizado
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="columns">
                <h3>Realizado</h3>
                {tasks
                    .filter((item) => item.status === 3)
                    .map((item) => (
                        <div className="row" key={item.id}>
                            <div className="task-item">
                                <p>{item.taskDescription}</p>
                                <div className="task-actions">
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 2)}>
                                        En Proceso
                                    </button>
                                    <button className="btn btn-primary" onClick={(e) => handleStatusTask(item.id, 1)}>
                                        Sin realizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
