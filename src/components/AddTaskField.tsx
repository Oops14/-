import React, { useState } from "react";

type AddTaskFieldType = {
    setInput: (defineInput: boolean) => void;
    addTask: (title: string) => void;
};

export const AddTaskField = (props: AddTaskFieldType) => {
    const [taskTitle, setTaskTitle] = useState("");

    function onChangeFunc(e: React.ChangeEvent<HTMLInputElement>) {
        let val = e.currentTarget.value;
        setTaskTitle(val);
    }

    function addTask() {
        props.addTask(taskTitle);
        props.setInput(false);
    }

    return (
        <div className="add-button input-main">
            <input type="text" onChange={onChangeFunc} />
            <button className="add-task" onClick={addTask}>
                ADD
            </button>
        </div>
    );
};
