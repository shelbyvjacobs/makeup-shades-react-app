import React from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";

export default function Body(props) {
    let tileList = props.shades.map(shades => {
        let tileStyle = {
            backgroundColor: `#${shades.hex}`
        };
        return (
            <div className="Body">
                <div className="Tile" style={tileStyle} key={shades.id}>
                    <Link to="/hex/:hex" className="HexCode">{shades.hex}</Link>
                </div>
            </div>
        );
    });
    return  (
        <div>{tileList}</div>
    )
  }