import React from 'react';

export default function Body(props) {
    let tileList = props.shades.map(shades => {
        let tileStyle = {
            backgroundColor: `#${shades.hex}`
        };
        return (
            <div className="Body">
                <div className="Tile" style={tileStyle} key={shades.id}>
                    <p>{shades.hex}</p>
                    {/* make each p tag into a link to the page for that hex */}
                </div>
            </div>
        );
    });
    return <div>{tileList}</div>;
  }