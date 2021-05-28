import {HeadingSection} from "./heading.section";
import {TextSection} from "./text.section";

export const sectionTypes = {
    heading: {
        component: HeadingSection,
        name: "Titre",
        icon: "icon-headings"
    },
    text: {
        component: TextSection,
        name: "TextBloc texte",
        icon: "icon-format_align_center"
    }
};

export const getSectionType = (type)=>{
    if(sectionTypes.hasOwnProperty(type)){
        return sectionTypes[type];
    }
    throw new Error(`Form part of type "${type}" does not exist.`);
}

export const getSectionTypeName = (type)=>{
    if(sectionTypes.hasOwnProperty(type)){
        return sectionTypes[type].name;
    }
    return "";
}
