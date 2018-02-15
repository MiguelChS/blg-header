import * as React from 'react';
import './index.css';
import { menuMobile } from './index.css';

export interface IProps {
    toggleMenu(): void
}

export const ButtonMobile = ({ toggleMenu }: IProps) => {
    return (
        <button
            onClick={toggleMenu}
            type="button"
            className={`${menuMobile} navbar-toggle`}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
    )
}