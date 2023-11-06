import styled from "styled-components";
import { Card } from "./components/card";

export const Canvas = styled.div`
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #917CC2;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

function App() {
  return (
    <Canvas>
      <Card />
    </Canvas>
  );
}

export default App;
