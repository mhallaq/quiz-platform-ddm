import React, { useState } from "react";
import styled from "styled-components";

const Track = styled.div`
  height: 20px;
  margin: 0 auto;
  border: 1px solid #ccc;
  background-color: #222;
  box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #cc1414;
  transition: width 0.3s ease-in;
`;

const Counter = (props) => {
  const { setView } = props;
  //Seconds Counter
  const [counter, setCounter] = React.useState(8); // counter is 8 seconds
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    if (counter === 0) {
      setView("grid");
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    setPercentage(100 - (counter / 8) * 100);
    return () => clearInterval(timer);
  }, [counter, percentage]);
  return (
    <>
      <Track>
        <Thumb percentage={percentage} />
      </Track>
    </>
  );
};

export default Counter;
