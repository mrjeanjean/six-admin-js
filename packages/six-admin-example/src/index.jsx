import './styles.css';

import {
    SixAdmin,
    Pages,
    Menu,
    Link,
    Route, ResourceEdit
} from 'six-admin-core';

import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from "./page";

const SimpleContent2 = () => {
    return (
        <div>Mon contenu 2</div>
    )
}

const MainApp = () => {

    return (
        <SixAdmin>
            <Menu>
                <Link to="/" replace>Accueil</Link>
                <Link to="/content" replace>Contenu</Link>
                <Link to="/other" replace>Contenu</Link>
            </Menu>

            <Pages>
                <ResourceEdit path="/" types="pages" id={1}/>
                <ResourceEdit path="/other" types="pages" component={Page} id={4}/>
                <Route path="/content" exact={true} component={SimpleContent2}/>
            </Pages>
        </SixAdmin>
    )
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);

