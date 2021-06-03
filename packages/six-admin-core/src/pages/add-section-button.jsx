import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import {SectionToolbar} from "./section-toolbar";
import {Icon} from "../components/icon";
import {PageContext} from "../core/admin.context";

export const AddSectionButton = ({position}) => {
    const [isToolbarOpen, setToolbarOpen] = useState(false);
    const {allowedSectionTypes} = useContext(PageContext);
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

        buttonRef.current?.addEventListener("mouseover", displayButton);
        buttonRef.current?.addEventListener("mouseout", hideButton);

        return ()=>{
            buttonRef.current?.removeEventListener("mouseover", displayButton);
            buttonRef.current?.removeEventListener("mouseout", hideButton);
        }
    }, [buttonRef, isToolbarOpen])

    const toggleToolbar = useCallback(()=>{
        setToolbarOpen(!isToolbarOpen);
    }, [isToolbarOpen])

    if(allowedSectionTypes.length === 0){
        return false;
    }

    return (
        <div className="add-section" ref={buttonRef} onClick={toggleToolbar} >
            <div className={"add-section__wrapper" + (isToolbarOpen ? " open" : "")}>
                <div className="section-toolbar__wrapper">
                    <SectionToolbar position={position}/>
                </div>
                <button className="add-section__button"><Icon icon="times"/></button>
            </div>
        </div>
    )
}
