import logo from "./logo.svg";
import "./App.css";
import { Container, Header, List } from "semantic-ui-react";
import { Counter } from "./components/counter";

function App() {
  return (
    <Container>
      <Counter></Counter>
    </Container>
  );
}

export default App;
