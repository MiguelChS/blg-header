import * as React from 'react';
import './index.scss';

export const RedSocial = () => {
    return (
        <ul className={`readSocial list-inline pull-right`}>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
        </ul>
    )
}