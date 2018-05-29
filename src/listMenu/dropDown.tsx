import * as React from 'react';
import { toggle, dropDownList } from './index.css';
import { Link } from 'react-router-dom';

export interface IProps {
  label: string
  href: string
  listItem: Array<{
    label: string
    href: string
  }>
}

export interface IState {
  show: boolean
}

export class DropDown extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      show: true
    }
  }
  showListItem = () => {
    this.setState({ show: true })
  }
  hidenListItem = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <li className={dropDownList} onMouseEnter={this.showListItem} onMouseLeave={this.hidenListItem}>
        <Link to={this.props.href} className={toggle}>{this.props.label}</Link>
        <ul style={{ display: this.state.show ? "block" : "none" }} className="dropdown-menu">
          {this.props.listItem.map((item, index) => <li key={index}><Link to={item.href}>{item.label}</Link></li>)}
        </ul>
      </li>
    )
  }
}