export const addSection = (section, position) => {
    return {
        type: "ADD_SECTION",
        section: section,
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
