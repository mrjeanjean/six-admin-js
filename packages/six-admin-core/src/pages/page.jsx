import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PageDefault} from "./page-default";
import {Route, Prompt} from "react-router-dom";
import {PageSidebar} from "./page-sidebar";
import {PageContext} from "../core/admin.context";
import {usePageActions} from "../core/admin.hooks";

export const PageComponent = ({id, component: Component, type, allowedSectionTypes = []}) => {
    const {page, pristine} = useSelector(state => state.editedPage);
    const dispatch = useDispatch();
    const {get:getPage} = usePageActions()

    useEffect(() => {
        getPage(id);

        return () => {
            dispatch({
                type: "UNLOAD_EDITED_PAGE"
            })
        }
    }, [id]);

    const setPageAttribute = useCallback((attribute, value) => {
        dispatch({
            type: "EDIT_PAGE",
            attribute,
            value
        })
    }, [id])

    if (!page) {
        return (
            <div>Chargement de la page...</div>
        )
    }

    return (
        <PageContext.Provider value={{resourceType: type, allowedSectionTypes}}>
            <Prompt
                when={!pristine}
                message={
                    JSON.stringify({
                        content: "Attention la page a été modifiée. Quitter sans sauvegarder ?",
                        confirmLabel: "Quitter sans sauvegarder",
                        cancelLabel: "Annuler",
                    })

                }
            />
            <div className="page-content">
                <Component page={page} setPageAttribute={setPageAttribute}/>
            </div>
            <PageSidebar/>
        </PageContext.Provider>
    )
}

export const ResourceEdit = ({id, type, path, component = null, allowedSectionTypes = []}) => {
    component = component ?? PageDefault;
    return (
        <Route path={path} exact={true}>
            <PageComponent
                id={id}
                component={component}
                allowedSectionTypes={allowedSectionTypes}
                type={type}
            />
        </Route>
    )
}
