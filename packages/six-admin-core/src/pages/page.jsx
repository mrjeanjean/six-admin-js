import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import api from "../api";
import {PageDefault} from "./page-default";
import {Route} from "react-router-dom";

const action = (id) => async dispatch => {
    const page = await api.getPage(id);
    dispatch({
        type: "LOAD_EDITED_PAGE",
        page: page
    })
}

export const PageComponent = ({id, component:Component})=>{
    const {page} = useSelector(state => state.editedPage);
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
            <Component page={page}/>
        </div>

    )
}

export const Page = ({id, path, component = null}) => {
    component = component ?? PageDefault;
    return (
        <Route path={path} exact={true}>
            <PageComponent id={id} component={component}/>
        </Route>
    )
}
