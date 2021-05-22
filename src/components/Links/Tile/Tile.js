import React from "react";
import "./Tile.scss";

const Tile = ({ title, id, handleTileClick }) => {
  return (
    <div className="tile" onClick={() => handleTileClick(id)}>
      <span className="tile-title">{title}</span>
    </div>
  );
};

export default Tile;
