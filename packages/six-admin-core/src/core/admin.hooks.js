import {useContext} from "react";
import {AdminContext, PageContext} from "./admin.context";
import {defaultSectionTypes} from "../components/sections/default-section-types";
import api from "../api";
import {useDispatch} from "react-redux";

export const useSectionTypes = () => {
    const appContext = useContext(AdminContext);

    const mergedSectionTypes = {
        ...appContext.sectionTypes,
        ...defaultSectionTypes
    }

    const getSectionType = (type) => {
        if (mergedSectionTypes.hasOwnProperty(type)) {
            return mergedSectionTypes[type];
        }
        throw new Error(`Section of type "${type}" does not exist. Have you register it on your AppModel?`);
    }

    return {
        types: {
            ...appContext.sectionTypes,
            ...defaultSectionTypes
        },
        getSectionType
    }
}

export const usePageActions = () => {
    const pageContext = useContext(PageContext);
    const dispatch = useDispatch();

    const save = (resource) => {
        dispatch(() => {
            dispatch({
                type: "SAVE_REQUEST"
            })
            api.update(resource, pageContext.resourceType).then(()=>{
                dispatch({
                    type: "SAVE_SUCCESS"
                })
            })
        })
    }

    const get = (id) => {
        dispatch(() => {
            dispatch({
                type: "FETCH_REQUEST"
            })
            return api.getPage(id).then((page)=>{
                dispatch({
                    type: "FETCH_SUCCESS"
                })
                dispatch({
                    type: "LOAD_EDITED_PAGE",
                    page: page
                })
            })
        })
    }

    return {
        save,
        get
    }
}
