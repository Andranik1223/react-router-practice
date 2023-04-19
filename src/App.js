import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Hello</h1>
      <Link to="/contact">Contact</Link>{" "}
      <Link to={`/about/${text}`}>About</Link>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
