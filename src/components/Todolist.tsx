import React, { useState } from "react";
import { Header } from "./Header";
import { TodolistContent } from "./TodolistContent";

export const Todolist = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="main-todolist">
            <Header openContent={open} setOpen={setOpen}/>
            {open && <TodolistContent />}
        </div>
    );
};
