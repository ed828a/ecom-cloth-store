import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { DirectoryMenuContainer } from "./directory.styles";

export const Directory = ({ sections }) => {
    
    return (
        <DirectoryMenuContainer className="directory-menu">
            {sections.map(({ id, ...restSectionProps }) => (
                <MenuItem key={id} {...restSectionProps} />
            ))}
        </DirectoryMenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSections
});

export default connect(mapStateToProps) (Directory);
