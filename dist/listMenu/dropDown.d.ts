/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    label: string;
    href: string;
    listItem: Array<{
        label: string;
        href: string;
    }>;
}
export interface IState {
    show: boolean;
}
export declare class DropDown extends React.Component<IProps, IState> {
    constructor(props: IProps);
    showListItem: () => void;
    hidenListItem: () => void;
    render(): JSX.Element;
}
