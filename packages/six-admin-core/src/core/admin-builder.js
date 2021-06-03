import React from 'react'
import {SixAdmin} from '../app';

export class AdminBuilder{
    sectionTypes = {};

    addSectionType(type, sectionType){
        this.sectionTypes[type] = {...sectionType};
    }

    getSectionTypes(){
        return this.sectionTypes;
    }

    buildComponent(){
        return ({children})=>React.createElement(SixAdmin, {adminModel:this}, children)
    }
}
