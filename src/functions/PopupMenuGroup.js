import React from 'react';
import { groupStyle } from '../styles/popupStyle';

const PopupMenuGroup = ({children}) => {
    // const groupStyle = "gx34gyr";

    return (
        <li className={groupStyle}>
            <ul>
                {children}
            </ul>
        </li>
    )
}

export default PopupMenuGroup;