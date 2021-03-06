import {combineReducers} from 'redux';

const pageEditedReducer = (page = {}, action) => {
    switch (action.type) {
        case "LOAD_EDITED_PAGE":
            return action.page;
        case "UNLOAD_EDITED_PAGE":
            return null;
        case "EDIT_PAGE":
        case "INIT_PAGE":
            return {
                ...page,
                [action.attribute]: action.value
            }
        case "ADD_SECTION":
            const addedSections = [...page.sections];
            const position = action.position ?? addedSections.length;

            addedSections.splice(position, 0, action.section);

            addedSections.forEach((section, index)=> {
                section.position = index
            });

            return {
                ...page,
                sections: addedSections
            }
        case "EDIT_SECTION":
            const editedSections = [...page.sections].map(section=>{
                if(section.id === action.sectionID){
                    section.content = action.content
                }
                return section;
            });
            return {
                ...page,
                sections: editedSections
            }
        case "REMOVE_SECTION":
            const removedSections = [...page.sections];
            return {
                ...page,
                sections: removedSections.filter(section=>section.id !== action.sectionID)
            }
        default:
            return page;
    }
};

const pristineReducer = (pristine = null, action) => {
    switch (action.type){
        case "LOAD_EDITED_PAGE":
        case "UNLOAD_EDITED_PAGE":
        case "INIT_PAGE":
        case "SAVE_RESOURCE_SUCCESS":
        case "UPDATE_RESOURCE_SUCCESS":
            return true;
        case "EDIT_PAGE":
            return (action.silent) ? true : false;
        case "ADD_SECTION":
        case "EDIT_SECTION":
        case "REMOVE_SECTION":
        case "MOVE_SECTION":
            return false;
    }
    return pristine;
};

const editedSectionReducer = (editedSection = null, action) => {
    switch (action.type){
        case "LOAD_SECTION_EDITOR":
            return action.sectionId;
        case "UNLOAD_SECTION_EDITOR":
            return null;
    }
    return editedSection;
}

export const pageReducer = combineReducers({
    page: pageEditedReducer,
    pristine: pristineReducer,
    editedSection: editedSectionReducer
});
