import {HeadingSection} from "./heading.section";
import {TextSection} from "./text.section";

export const defaultSectionTypes = {
    heading: {
        component: HeadingSection,
        name: "Titre",
        icon: "heading",
        default: ""
    },
    text: {
        component: TextSection,
        name: "Texte",
        icon: "align-center",
        default: ""
    }
};
