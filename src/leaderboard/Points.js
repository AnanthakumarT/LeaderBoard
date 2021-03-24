import React, { useState, useEffect } from "react";

const Points = props => {
    const [points, setpoints] = useState(props.points);

    useEffect(() => {
      let i = 50;
      const interval = setInterval(() => {

        i = i - 1;

        setpoints((n) => Math.floor(n + (props.points - n) / 40));
        
        if (i <= 0) {
          setpoints(props.points);
          clearInterval(interval);
        }
      }, 5);

      return function cleanup() {
        clearInterval(interval);
      };

    }, [props.points]);
  
    return <div>{points}pt</div>;
}

export default Points
