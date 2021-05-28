import {combineReducers} from 'redux';

const pageEditedReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOAD_EDITED_PAGE":
            return action.page;
        case "UNLOAD_EDITED_PAGE":
            return null;
        default:
            return state;
    }
};

const pristineReducer = (state = null, action) => {
    switch (action.type){
        case "UNLOAD_EDITED_PAGE":
            return true;
    }
    return state;
};

const sectionEditedReducer = (state = null, action) => {
    switch (action.type){
        case "LOAD_SECTION_EDITOR":
            return action.sectionId;
        case "UNLOAD_SECTION_EDITOR":
            return null;
    }
    return state;
}

export const pageReducer = combineReducers({
    page: pageEditedReducer,
    pristine: pristineReducer,
    sectionEdited: sectionEditedReducer
});
