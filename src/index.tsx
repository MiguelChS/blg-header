import * as React from 'react';
import { RedSocial } from './redSocial';
import { Menu } from './listMenu';
import { ButtonMobile } from './menuMobile';
import './header.scss';

export interface IState {
    showMenu: boolean;
}
export interface MyProps { }
export class Header extends React.Component<MyProps, IState> {

    constructor(props: MyProps) {
        super(props)
        this.state = {
            showMenu: false
        }
    }

    showMenuMobile = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
        return (
            <nav className={`header navbar  navbar-default`}>
                <div className="container">
                    <div className="menucontent">
                        <div className="navbar-header">
                            <ButtonMobile
                                toggleMenu={this.showMenuMobile}
                            />
                        </div>
                        <div className={`collapse navbar-collapse ${this.state.showMenu ? 'in' : ''}`}>
                            <RedSocial />
                            <Menu />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}