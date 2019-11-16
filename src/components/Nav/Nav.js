import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false
        };
    this.showMenu = this.showMenu.bind(this);
    }

    showMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render() {
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="MenuLink MenuLinkActive" href={link.link}>{link.label}</a>
            ) : (
                <a className="MenuLink" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="MenuListItem">
                    {linkMarkup}
                </li>
            );
        });

        if (this.state.showMenu = false) {
          return (
            <nav className="Nav">
                <div className="Hamburger" onClick={this.showMenu}></div>

                <div className="Menu Hidden">
                    <ul className="MenuList">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
        } else if (this.state.showMenu = true) {
          return (
            <nav className="Nav">
                <div className="Hamburger" onClick={this.showMenu}></div>

                <div className="Menu">
                    <ul className="MenuList">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
        }
    }
}

export default Nav;