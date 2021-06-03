import './styles/core.scss';

import React from 'react';
import {Provider, useSelector,} from 'react-redux';
import Store from "./store/store";
import {ErrorBoundary} from "./error-boundary";
import {combineReducers} from "redux";
import {HashRouter as Router} from "react-router-dom";
import {initialState} from "./store/initial-state";
import {pageReducer} from "./store/page-reducer";
import {promptConfirmation} from "./components/prompt-confirmation";
import {AdminContext} from './core/admin.context';
import {loadingReducer} from "./store/generic-reducer";
import {Loader} from "./components/loader";


const RootLoader = ()=>{
    const isLoading = useSelector(state=>state.loading);

    return (
        <Loader isLoading={isLoading}/>
    )
}

export const SixAdmin = ({state = {}, reducers = {}, children, adminModel}) => {
    const store = {...initialState, ...state};

    const appReducers = {
        editedPage: pageReducer,
        loading: loadingReducer,
        ...reducers
    }

    return (
        <div className="six-admin">
            <AdminContext.Provider value={adminModel}>
                <ErrorBoundary>
                    <Provider store={Store(store, combineReducers(appReducers))}>
                        <Router getUserConfirmation={promptConfirmation}>
                            <div className="main-layout">
                                {children}
                            </div>
                        </Router>
                        <RootLoader/>
                    </Provider>
                    <div className="portal--modal"/>
                </ErrorBoundary>
            </AdminContext.Provider>
        </div>
    )
}
