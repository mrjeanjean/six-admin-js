export const loadingReducer = (state = {}, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) return state;

    const [,,requestState] = matches;
    return requestState === 'REQUEST';
};
