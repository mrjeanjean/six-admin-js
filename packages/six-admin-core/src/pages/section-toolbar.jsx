import React, {useCallback, useContext} from "react";
import {addSection} from "../store/page-actions";
import {useDispatch} from "react-redux";
import {Icon} from "../components/icon";
import {useSectionTypes} from "../core/admin.hooks";
import {PageContext} from "../core/admin.context";

export const SectionToolbar = ({position}) => {
    const dispatch = useDispatch();
    const {getSectionType} = useSectionTypes();
    const {allowedSectionTypes} = useContext(PageContext);

    const addSectionHandler = useCallback((type) => {
        const sectionType = getSectionType(type);
        dispatch(addSection(type, position, sectionType.default));
    }, [position]);

    return (
        <div className="section-toolbar">
            {allowedSectionTypes && allowedSectionTypes.map(sectionType => {
                const sectionTypeData = getSectionType(sectionType);
                return (
                    <button
                        key={sectionType}
                        type="button"
                        className="section-toolbar__button"
                        onClick={() => addSectionHandler(sectionType)}
                    ><span><Icon icon={sectionTypeData.icon}/></span></button>
                )
            })}
        </div>
    )
}
