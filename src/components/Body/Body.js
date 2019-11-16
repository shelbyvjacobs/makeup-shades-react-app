import React from 'react';
import "./Body.css";
import { Link } from "react-router-dom"
import { conditionalExpression } from '@babel/types';

export default function Body(props) {
    let tileList = props.shades.map(shades => {
        let tileStyle = {
            backgroundColor: `#${shades.hex}`
        };
        return (
            <div className="Body">
                <div className="Tile" style={tileStyle} key={shades.id}>
                    <p>{shades.hex}</p>
                </div>
            </div>
        );
    });
    return <div>{tileList}</div>;
  }