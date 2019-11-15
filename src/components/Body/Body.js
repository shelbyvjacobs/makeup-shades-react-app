import React from 'react';
import "./Body.css";
// import Tile from "../Tile/Tile";
import { Link } from "react-router-dom"

// export default function Body(props) {
//     let tileList = props.shades.map(index => {
//       let Tile = {
//         backgroundColor: `{index.hex}`
//       };
//       return (
//         <div className="Tile" style={Tile} key={index.id}>
//           <Link className="tileLink" to={`/shades/${index.parkCode}`}>
//             {index.hex}
//           </Link>
//         </div>
//       );
//     });
//     return <div className="tileContainer">{tileList}</div>;
//   }

const Body = ({shades}) => {
    let tileStyle = {
        backgroundColor: `{shades.hex}`
    }
    return (
        <div className="Body">
        {shades.map((shade) => (
            <div className="Tile" style={tileStyle} key={shade.id}>
            <p>{shade.hex}</p>
            </div>
        ))}
        </div>
    )
}

export default Body;