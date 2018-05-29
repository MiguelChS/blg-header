import * as React from 'react';
import './index.css';
import { listMenu, toggle } from './index.css';
import { Link } from 'react-router-dom';
import { DropDown } from './dropDown';

export const Menu: React.SFC = () => {
    return (
        <ul className={`${listMenu} nav navbar-nav text-uppercase pull-left`}>
            <DropDown
                label="categoria"
                href="#"
                listItem={[{ href: "/entrevistas", label: "Entrevistas" },{ href: "/clasex", label: "ClaSEX" }]}
            />
            <li><Link to="/fotos">Fotos</Link></li>
            <li><Link to="/videos">Videos</Link></li>
        </ul>
    )
}