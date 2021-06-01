import './styles/core.scss';

import React from 'react';
import {Provider,} from 'react-redux';
import Store from "./store/store";
import {ErrorBoundary} from "./error-boundary";
import {combineReducers} from "redux";
import {HashRouter as Router} from "react-router-dom";
import {initialState} from "./store/initialState";
import {pageReducer} from "./store/page-reducer";
import {promptConfirmation} from "./components/prompt-confirmation";

export const AppContext = React.createContext(null);

export const SixAdmin = ({state = {}, reducers = {}, children, adminModel}) => {
    const store = {...initialState, ...state};

    const appReducers = {
        editedPage: pageReducer,
        ...reducers
    }
    return (
        <div className="six-admin">
            <AppContext.Provider value={adminModel}>
                <ErrorBoundary>
                    <Provider store={Store(store, combineReducers(appReducers))}>
                        <Router getUserConfirmation={promptConfirmation}>
                            <div className="main-layout">
                                {children}
                            </div>
                        </Router>
                    </Provider>
                    <div className="portal--modal"/>
                </ErrorBoundary>
            </AppContext.Provider>
        </div>
    )
}
