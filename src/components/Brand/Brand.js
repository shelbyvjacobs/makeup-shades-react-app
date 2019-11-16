import React from 'react';
import "./Brand.css";
import { Link } from "react-router-dom"

export default function Brand(props) {
    // let brandList = props.shades.map(brands => {
        return (
            <div className="Body">
                <h2>Brands</h2>
                {/* <Link to="/group/:group">{brands.group}</Link> */}
                <Link to="/brand/:brandShort" className="link">brand here</Link>
            </div>
        );
    // })
    // return <div>{brandList}</div>
};