export class AdminModel{
    sectionTypes = {};

    addSectionType(type, sectionType){
        this.sectionTypes[type] = {...sectionType};
    }

    getSectionTypes(){
        return this.sectionTypes;
    }
}
