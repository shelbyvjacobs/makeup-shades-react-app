import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false
        };
    }

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {

        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="MenuLink" href={link.link}>{link.label}</a>
            ) : (
                <a className="MenuLink" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="MenuListItem">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="Nav">
                <div className="Hamburger"></div>

                <div className="Menu">
                    <ul className="MenuList">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;