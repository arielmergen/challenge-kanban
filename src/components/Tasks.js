import React, { useState } from "react";

export const Tasks = React.memo(({ id, tasks = [], children, className, title, setTask, manageStateColumn }) => {
    const [activeDrag, setActivedrag] = useState(false);
    const drop = (e) => {
        e.preventDefault();
        const task_id = e.dataTransfer.getData("task_id");
        switch (e.target.id) {
            case "enproceso":
                manageStateColumn({ task_id, status: 2 });
                break;
            case "finalizado":
                manageStateColumn({ task_id, status: 3 });
                break;
            default:
                manageStateColumn({ task_id, status: 1 });
                break;
        }
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    const dragEnter = () => {
        setActivedrag(true);
    };
    const dragLeave = () => {
        setActivedrag(false);
    };

    return (
        <div
            id={id}
            className={`${className} ${activeDrag ? "active" : ""}`}
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
        >
            <h3>{title}</h3>
            {children}
        </div>
    );
});
