import React from 'react';
import "./Tile.css"
import { Link } from "react-router-dom"

// class Tile extends Component {
//     constructor(props){
//       super(props);
  
//       this.state = {

//       };
//     }
  
//       render(){
//           return (
//               <div className="Tile">
//                   {/* <p>Tile!</p> */}
//               </div>
//           )
//       }
//   }
  

// export default Tile;

export default function Tile(props) {
    let tileList = props.shades.map(index => {
      let Tile = {
        backgroundColor: `${index.hex}`
      };
      return (
        <div className="Tile" style={Tile} key={index.id}>
          <Link className="tileLink" to={`/shades/${index.parkCode}`}>
            {index.hex}
          </Link>
        </div>
      );
    });
    return <div className="tileContainer">{tileList}</div>;
  }