import React, {useCallback, useContext} from "react";
import {addSection} from "../store/page-actions";
import {useDispatch, useSelector} from "react-redux";
import {Icon} from "../components/icon";
import {useSectionTypes} from "../core/admin.hooks";

export const SectionToolbar = ({position}) => {
    const dispatch = useDispatch();
    const {getSectionType} = useSectionTypes();

    const allowedSectionTypes = useSelector(state => state.editedPage.page.allowedSectionTypes);

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
