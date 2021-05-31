import React, {useCallback, useEffect, useRef, useState} from "react";
import {SectionToolbar} from "./section-toolbar";

export const AddSectionButton = ({position}) => {
    const [isToolbarOpen, setToolbarOpen] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const displayButton = e => {
            e.currentTarget.classList.add("on-mouse-over");
        };

        const hideButton = e => {
            if(!isToolbarOpen){
                e.currentTarget.classList.remove("on-mouse-over");
            }
        }

        buttonRef.current.addEventListener("mouseover", displayButton);
        buttonRef.current.addEventListener("mouseout", hideButton);

        return ()=>{
            if(!buttonRef.current){
                return;
            }
            buttonRef.current.removeEventListener("mouseover", displayButton);
            buttonRef.current.removeEventListener("mouseout", hideButton);
        }
    }, [buttonRef, isToolbarOpen])

    const toggleToolbar = useCallback(()=>{
        setToolbarOpen(!isToolbarOpen);
    }, [isToolbarOpen])

    return (
        <div className="add-section" ref={buttonRef} onClick={toggleToolbar} >
            <div className={"add-section__wrapper" + (isToolbarOpen ? " open" : "")}>
                <div className="section-toolbar__wrapper">
                    <SectionToolbar position={position}/>
                </div>
                <button className="add-section__button">+</button>
            </div>
        </div>
    )
}
