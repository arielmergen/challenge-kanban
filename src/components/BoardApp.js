import React, { useContext, useState, useCallback, useEffect } from "react";

import { KanbanContext } from "./../kanbanContext";
//import { TaskItems } from "./TaskItems";
import { Tasks } from "./Tasks";
import { Item } from "./Item";
import { FormTaks } from "./FormTaks";

import "./css/style.css";

export const BoardApp = () => {
    const { tasks, setTasks } = useContext(KanbanContext);

    const [taskStateColum, setTaskStateColum] = useState({});

    const manageStateColumn = useCallback(
        (s) => {
            setTaskStateColum(s);
        },
        [setTaskStateColum]
    );

    useEffect(() => {
        setTasks(
            tasks.map((item) => {
                if (item.id === parseInt(taskStateColum.task_id)) {
                    return {
                        ...item,
                        status: taskStateColum.status,
                    };
                }
                return item;
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [taskStateColum, setTasks]);

    return (
        <div className="wrapper">
            <FormTaks tasks={tasks} setTask={setTasks} />
            <div className="kanban">
                <Tasks
                    id="sinrealizar"
                    className="columns"
                    title="Sin Realizar"
                    tasks={tasks}
                    setTask={setTasks}
                    manageStateColumn={manageStateColumn}
                >
                    {tasks.length > 0 &&
                        tasks
                            .filter((item) => item.status === 1)
                            .map((item) => (
                                <Item
                                    id={item.id}
                                    draggable="true"
                                    key={item.id}
                                    item={item}
                                    setTasks={setTasks}
                                    board="sinrealizar"
                                    tasks={tasks}
                                />
                            ))}
                </Tasks>
                <Tasks
                    id="enproceso"
                    className="columns"
                    title="En proceso"
                    tasks={tasks}
                    setTask={setTasks}
                    manageStateColumn={manageStateColumn}
                >
                    {tasks.length > 0 &&
                        tasks
                            .filter((item) => item.status === 2)
                            .map((item) => (
                                <Item
                                    id={item.id}
                                    draggable="true"
                                    key={item.id}
                                    item={item}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    boardname="enproceso"
                                />
                            ))}
                </Tasks>
                <Tasks
                    id="finalizado"
                    className="columns"
                    title="Finalizado"
                    tasks={tasks}
                    setTask={setTasks}
                    manageStateColumn={manageStateColumn}
                >
                    {tasks.length > 0 &&
                        tasks
                            .filter((item) => item.status === 3)
                            .map((item) => (
                                <Item
                                    id={item.id}
                                    draggable="true"
                                    key={item.id}
                                    item={item}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    boardname="finalizado"
                                />
                            ))}
                </Tasks>
            </div>
        </div>
    );
};
