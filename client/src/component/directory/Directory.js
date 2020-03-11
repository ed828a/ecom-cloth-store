import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        { sections.map(({ id, ...restSectionPros }) => (
            <MenuItem key={id} {...restSectionPros} /> // ...restSectionPros presents all properties but id, of the element object in sections array
        ))}
    </div>
)



const mapStateToPros = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToPros)(Directory);

