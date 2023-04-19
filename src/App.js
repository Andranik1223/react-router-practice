import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to="/contact">Contact</Link> <Link to="/about">About</Link>
      <div></div>
    </div>
  );
}

export default App;
