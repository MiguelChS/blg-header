/// <reference types="react" />
import * as React from 'react';
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
