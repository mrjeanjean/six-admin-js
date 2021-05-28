import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Route} from "../index";
import api from "../api";
import {Sections} from "./sections";

const action = (id) => async dispatch => {
    const page = await api.getPage(id);
    dispatch({
        type: "LOAD_EDITED_PAGE",
        page: page
    })
}

export const PageComponent = ({id})=>{
    const {page, pristine} = useSelector(state => state.editedPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action(id));

        return ()=>{
            dispatch({
                type: "UNLOAD_EDITED_PAGE"
            })
        }
    }, [id]);

    if(!page){
        return (
            <div>Chargement de la page...</div>
        )
    }

    return (
        <div>
            <h1>{page.name}</h1>
            <Sections sections={page.sections}/>
            <pre>{JSON.stringify(pristine)}</pre>
            <pre>{JSON.stringify(page, null, 2)}</pre>
        </div>

    )
}

export const Page = ({id, path}) => {
    return (
        <Route path={path} exact={true}>
            <PageComponent id={id}/>
        </Route>
    )
}
