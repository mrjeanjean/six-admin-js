import {useContext} from "react";
import {AppContext} from "../app";
import {defaultSectionTypes} from "../components/sections/default-section-types";

export const useSectionTypes = ()=>{
    const appContext = useContext(AppContext);

    const mergedSectionTypes = {
        ...appContext.sectionTypes,
        ...defaultSectionTypes
    }

    const getSectionType = (type)=>{
        if(mergedSectionTypes.hasOwnProperty(type)){
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
