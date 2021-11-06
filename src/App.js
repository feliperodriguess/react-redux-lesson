import { Container } from "react-bootstrap";
import { InfoLog } from "./components/InfoLog";
import User from "./components/User";

function App() {

  return (
    <div className="App">
      <Container>
        <InfoLog/> 
        <br />
        <User />
        <br />
      </Container>
    </div>
  );
}

export default App;
