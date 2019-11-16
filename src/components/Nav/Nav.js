import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);

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

        const menuOpen = this.state.showMenu;
        let hamburger;

        if (menuOpen) {
          hamburger = <div className="Hamburger Hidden" onClick={this.showMenu}></div>;
        } else {
          hamburger = <div className="Hamburger" onClick={this.showMenu}></div>;
        };

        return (
            <nav className="Nav">
                {hamburger}
                <div className="Menu">
                    <ul className="MenuList">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;