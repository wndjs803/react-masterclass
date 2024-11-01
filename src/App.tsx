import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // 해당 컴포넌트를 넘어가면 안보이게
`;

function App() {
  const x = useMotionValue(0); // x값 추적, state가 아님, 리렌더링 되지 않음
  // console.log(x); // 그래서 한 번만 출력
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
