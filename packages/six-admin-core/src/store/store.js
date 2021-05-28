import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

const Store = (initialState, reducers) => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger));

    return createStore(
        reducers,
        initialState,
        middleware
    );
};

export default Store;
