import React from 'react';
import { Link } from "react-router-dom"

export default function Product(props) {
    return (
        <div className="Body">
            <h2>Products</h2>
            <Link to="/product/:productShort" className="link">products here</Link>
        </div>
    );
};