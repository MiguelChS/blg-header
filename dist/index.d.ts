import * as React from 'react';
import './header.scss';
export interface IState {
    showMenu: boolean;
}
export interface MyProps {
}
export declare class Header extends React.Component<MyProps, IState> {
    constructor(props: MyProps);
    showMenuMobile: () => void;
    render(): JSX.Element;
}
