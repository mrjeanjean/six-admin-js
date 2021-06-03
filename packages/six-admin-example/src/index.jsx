import './styles.css';

import {
    MainContent,
    Menu,
    Link,
    ResourceEdit, AdminBuilder, InputField
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
    const adminBuilder = new AdminBuilder();

    // ADD SECTION TYPES
    adminBuilder.addSectionType("special", {
        component: SpecialSection,
        name: "Spécial",
        icon: "heart",
        default: "♥"
    });

    adminBuilder.addSectionType("special2", {
        component: SpecialSection,
        name: "Spécial",
        icon: "heart",
        default: "✌"
    });

    // ADD API
    const Admin = adminBuilder.buildComponent();

    return (
        <Admin state={{test:2}}>
            <Menu>
                <Link to="/" replace>Accueil</Link>
                <Link to="/other" replace>Contenu</Link>
            </Menu>

            <MainContent>
                <ResourceEdit path="/" type="page" id={1}/>
                <ResourceEdit
                    path="/other"
                    type="page"
                    component={Page}
                    id={4}
                    allowedSectionTypes={['text', 'heading', 'special', 'special2']}
                />
            </MainContent>
        </Admin>
    )
}

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);

