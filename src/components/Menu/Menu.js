import React, { Component } from 'react';
import './Menu.css';

export default function Menu(props) {
    
        return (
            <div className="Menu">
                <ul className="MenuList">
                    <li><a href="#" className="MenuLink MenuListItem">Shades</a></li>
                    <li><a href="#" className="MenuLink MenuListItem">Brands</a></li>
                    <li><a href="#" className="MenuLink MenuListItem">Products</a></li>
                    <li><a href="#" className="MenuLink MenuListItem">Countries</a></li>
                </ul>
            </div>
        );
    };