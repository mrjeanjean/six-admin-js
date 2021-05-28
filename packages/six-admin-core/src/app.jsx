import './styles/core.css';

import React from 'react';
import {Provider,} from 'react-redux';
import Store from "./store/store";
import {ErrorBoundary} from "./helpers/error-boundary";
import {combineReducers} from "redux";
import {HashRouter as Router} from "react-router-dom";
import {initialState} from "./store/initialState";
import {pageReducer} from "./store/page-reducer";

export const SixAdmin = ({state = {}, reducers = {}, children}) => {
    const store = {...initialState, ...state};
    const appReducers = {
        editedPage: pageReducer,
        ...reducers
    }
    return (
        <div className="six-admin">
            <ErrorBoundary>
                <Provider store={Store(store, combineReducers(appReducers))}>
                    <Router>
                        <div className="main-layout">
                            {children}
                        </div>
                    </Router>
                </Provider>
            </ErrorBoundary>
        </div>
    )
}
