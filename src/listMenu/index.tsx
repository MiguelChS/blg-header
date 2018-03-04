import * as React from 'react';
import './index.css';
import {listMenu} from './index.css';

export const Menu = () => {
    return (
        <ul className={`${listMenu} nav navbar-nav text-uppercase pull-left`}>
            <li><a href="/">Home</a></li>
        </ul>
    )
}