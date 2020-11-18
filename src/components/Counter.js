import React from "react";
import styled from "styled-components";

const Track = styled.div`
  height: 20px;
  margin: 0 auto;
  background-color: #e0e0e0;
`;

const Thumb = styled.div`
  width: ${100/9}%;
  height: 100%;
  background-color: #cc1414;
  transition: width 0.3s ease-in;
  margin: .5rem;
  height: 1rem;
`;

const Counter = (props) => {
  const { setView, wrongAnswer } = props;
  //Seconds Counter
  const [counter, setCounter] = React.useState(11); // counter is 11 seconds
  const thumbs = React.useMemo(() => [
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
    <Thumb />,
  ],[])

  console.log(counter)

  React.useEffect(() => {
    if (counter <= 0) {
      setView("grid");
      wrongAnswer()
    }
    const timer = counter > 0 && setInterval(() => {
      setCounter(counter => counter - 2)
      thumbs.splice(0, 2)
    }, 2000);

    
    return () => clearInterval(timer);
  }, [counter, setView, thumbs, wrongAnswer]);

  return (
    <>
      <Track style={{ display: 'flex', justifyContent: 'center', height: "2rem" }}>
        {thumbs}
      </Track>
    </>
  );
};

export default Counter;
