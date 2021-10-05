import React from "react";

const Water = ({ waterLevel }) => {
  let waterMap = [];
  for (let i = 0; i < waterLevel; i++) {
    waterMap.push(
      <div className="water" key={`water${i}`}>
        {i}
      </div>
    );
  }
  return <div>{waterMap}</div>;
};

export default Water;
