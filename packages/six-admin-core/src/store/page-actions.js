import {getUniqueID} from "../helpers";

export const addSection = (type, position, content = null) => {
    return {
        type: "ADD_SECTION",
        section: {
            id: getUniqueID(),
            type: type,
            content: content ?? '', //TODO: need be set with default value
            position: position
        },
        position: position
    }
}

export const editSection = (sectionID, content) => {
    return {
        type: "EDIT_SECTION",
        sectionID: sectionID,
        content: content
    }
}

export const removeSection = (sectionID) => {
    return {
        type: "REMOVE_SECTION",
        sectionID: sectionID,
    }
}

export function initPage(attribute, value) {
    return {
        type: "INIT_PAGE",
        attribute: attribute,
        value: value
    }
}
