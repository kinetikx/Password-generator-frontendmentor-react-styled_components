import styled from "styled-components";
import Colors from "./Colors/Colors";
import Generator from "./Components/Generator";
import "./App.css";
import DataProvider from "./Store/DataProvider";
function App() {
  const Styledapp = styled.div`
    align-items: center;
    background-color: ${Colors.darkBlue} !important;
    justify-content: center;
    color: ${Colors.offWhite};
    height: 100vh;
    display: flex; /* Flex konteyner olarak ayarlayın */
  `;

  return (
    <DataProvider>
      <Styledapp >
        <Generator />
      </Styledapp>
    </DataProvider>
  );
}

export default App;
