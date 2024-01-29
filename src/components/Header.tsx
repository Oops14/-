import React from "react";

type HeaderType = {
    openContent: boolean;
    setOpen: (open: boolean) => void;
}

export const Header = (props: HeaderType) => {

    function openContent() {
        props.setOpen(!props.openContent);
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className={props.openContent ? "burger opened" : "burger"} onClick={openContent}>
                        <div className="line"></div>
                    </div>
                    <div className="header-title">Website Todo</div>
                </div>
            </div>
        </div>
    );
};
