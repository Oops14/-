import React from "react";

type ButtonType = {
    title: string;
    setInput: (defineInput: boolean) => void;
};

export const Button = (props: ButtonType) => {
    // e: React.MouseEvent<HTMLButtonElement>
    let addTask = () => {
        // let event = e;
        props.setInput(true);
    };

    return (
        <>
            <button className="add-button" onClick={addTask}>
                {props.title}
            </button>
        </>
    );
};
