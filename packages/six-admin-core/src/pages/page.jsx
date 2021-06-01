import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import api from "../api";
import {PageDefault} from "./page-default";
import {Route, Prompt} from "react-router-dom";

const fetchPage = (id, options = {}) => async dispatch => {
    let page = await api.getPage(id);
    page = {...page, ...options}
    dispatch({
        type: "LOAD_EDITED_PAGE",
        page: page
    })
}

export const PageComponent = ({id, component: Component, allowedSectionTypes = []}) => {
    const {page, pristine} = useSelector(state => state.editedPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPage(id, {
            allowedSectionTypes
        }));

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
        <>
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
            <Component page={page} setPageAttribute={setPageAttribute}/>
        </>
    )
}

export const ResourceEdit = ({id, path, component = null, allowedSectionTypes = []}) => {
    component = component ?? PageDefault;
    return (
        <Route path={path} exact={true}>
            <PageComponent id={id} component={component} allowedSectionTypes={allowedSectionTypes}/>
        </Route>
    )
}
