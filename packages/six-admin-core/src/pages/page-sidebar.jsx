import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {usePageActions} from "../core/admin.hooks";

export const PageSidebar = ()=>{
    const editedPage = useSelector(state=>state.editedPage.page);
    const {save} = usePageActions();

    const saveResourceHandler = useCallback(()=>{
        save(editedPage);
    }, [editedPage])

    return (
        <div className="page-sidebar">
            <div className="page-sidebar__inner">
                <button type="button" className="button button--block" onClick={saveResourceHandler}>Enregistrer</button>
            </div>
        </div>
    )
}
