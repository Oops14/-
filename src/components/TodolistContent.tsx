import React, { useState } from "react";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { taskStateType } from "../state/tasks-reducer";
import { AppRootStateType } from "../state/state";
import { AddTaskField } from "./AddTaskField";

export const TodolistContent = () => {
    const [defineInput, setInput] = useState(false);

    let taskState = useSelector<AppRootStateType, taskStateType[]>(
        (state) => state.tasksReducer
    );
    let dispatch = useDispatch();

    function removeTask(taskId: string) {
        dispatch({ type: "REMOVE_TASK", payload: { taskId } });
    }

    function addTask(title: string) {
        dispatch({ type: "ADD_TASK", payload: { title } });
    }

    function isDone(taskId: string, status: boolean) {
        dispatch({ type: "STATUS_TASK", payload: { taskId, status } });
    }

    return (
        <div className="todo-content">
            <div className="container">
                <ul className="todo-list">
                    {taskState.map((task) => {
                        return (
                            <li className={task.isDone ? "todo-item checked" : "todo-item"} key={task.id}>
                                <input
                                    type="radio"
                                    className="checkbox"
                                    checked={task.isDone}
                                    onChange={() => {isDone(task.id, task.isDone)}}
                                />
                                {task.title}{" "}
                                <span
                                    className="delete-icon"
                                    onClick={() => {
                                        removeTask(task.id);
                                    }}
                                >
                                    x
                                </span>
                            </li>
                        );
                    })}
                </ul>
                {defineInput ? (
                    <AddTaskField addTask={addTask} setInput={setInput} />
                ) : (
                    <Button title={"+New Task"} setInput={setInput} />
                )}
            </div>
        </div>
    );
};
