import React from 'react';
import { Link } from "react-router-dom"

export default function Brand(props) {
        return (
            <div className="Body">
                <h2>Brands</h2>
                <Link to="/brand/:brandShort" className="link">brand here</Link>
            </div>
        );
};