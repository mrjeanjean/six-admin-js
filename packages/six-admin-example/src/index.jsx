import {doSomethingElse, TinySlider} from 'six-admin-core';
import ReactDOM from 'react-dom';
import React from 'react';

doSomethingElse();

const HelloMessage = ({categories})=>{
    return (
        <div>
            <TinySlider
            >
                {categories.map((category) => (
                    <div
                        key={category.id}
                        style={{ position: "relative" }}
                    >
                        <h2 className="slide__title">
                            <span className="title__line--left"/>
                            <span className="title__text">{category.name}</span>
                            <span className="title__line--right"/>
                        </h2>
                    </div>
                ))}
            </TinySlider>
        </div>
    )
}

const categories = [
    {
        id: 1,
        name: "categorie name 1"
    },
    {
        id: 2,
        name: "categorie name 2"
    },
    {
        id: 1,
        name: "categorie 3 name 3"
    },
    {
        id: 1,
        name: "categorie 4 name 4"
    }
]

ReactDOM.render(
    <HelloMessage categories={categories}/>,
    document.getElementById('root')
);

