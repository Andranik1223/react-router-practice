import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default App;
