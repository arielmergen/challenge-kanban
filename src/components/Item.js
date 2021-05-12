import React from "react";

export const Item = ({ id, board, item, tasks, setTasks }) => {
    const { taskDescription } = item;
    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData("task_id", target.id);
    };
    const dragOver = (e) => {
        e.stopPropagation();
    };
    const deleteTask = (e) => {
        e.preventDefault();
        setTasks(tasks.filter((el) => el.id !== item.id));
    };
    return (
        <div id={id} board={board} className="row" draggable="true" onDragStart={dragStart} onDragOver={dragOver}>
            <div className="task-item">
                <h2 className="task-title">{taskDescription}</h2>
                <div className="task-actions">
                    <button className="btn btn-primary" onClick={deleteTask}>
                        Borrar
                    </button>
                </div>
            </div>
        </div>
    );
};
