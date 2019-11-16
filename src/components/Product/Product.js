import React from 'react';
import "./Product.css";
import { Link } from "react-router-dom"
import { conditionalExpression } from '@babel/types';

export default function Product(props) {
    return (
        <div className="Body">
            <h2>Products</h2>
            <Link to="/product/:productShort" className="link">products here</Link>
        </div>
    );
};