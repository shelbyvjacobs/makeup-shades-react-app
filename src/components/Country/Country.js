import React from 'react';
import "./Country.css";
import { Link } from "react-router-dom"
import { conditionalExpression } from '@babel/types';

export default function Country(props) {
    return (
        <div className="Body">
            <h2>Countries</h2>
            {/* <Link to="/group/:group">{brands.group}</Link> */}
            <Link to="/group/:group" className="link">countries here</Link>
        </div>
    );
};