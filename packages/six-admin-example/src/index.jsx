import './styles.css';

import {
    SixAdmin,
    Pages,
    Menu,
    Link,
    ResourceEdit, AdminModel, InputField
} from 'six-admin-core';

import React from 'react';
import ReactDOM from 'react-dom';
import {Page} from "./page";

const SpecialSection = ({section, setContent})=>{
    return (
        <div>
            <InputField onChange={value=>setContent(value)} value={section.content}/>
        </div>
    )
}

const MainApp = () => {
    const adminModel = new AdminModel();

    adminModel.addSectionType("special", {
        component: SpecialSection,
        name: "Spécial",
        icon: "heart",
        default: "♥"
    });

    adminModel.addSectionType("special2", {
        component: SpecialSection,
        name: "Spécial",
        icon: "heart",
        default: "✌"
    });

    return (
        <SixAdmin adminModel={adminModel}>
            <Menu>
                <Link to="/" replace>Accueil</Link>
                <Link to="/other" replace>Contenu</Link>
            </Menu>

            <Pages>
                <ResourceEdit path="/" types="pages" id={1}/>
                <ResourceEdit
                    path="/other"
                    types="pages"
                    component={Page}
                    id={4}
                    allowedSectionTypes={['text', 'heading', 'special', 'special2']}
                />
            </Pages>
        </SixAdmin>
    )
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);

