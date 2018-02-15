import * as React from 'react';
import './index.css';
import {listMenu} from './index.css';

export const Menu = () => {
    return (
        <ul className={`${listMenu} nav navbar-nav text-uppercase pull-left`}>
            <li><a href="archive-cat.html">Home</a></li>
            <li><a href="about-me.html">About me</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    )
}