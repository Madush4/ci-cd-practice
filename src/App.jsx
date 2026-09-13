import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🚀 CI/CD Practice App</h1>
      <p>If you can see this, GitHub Actions + Pages is working!</p>

      <div style={{ margin: "1.5rem 0" }}>
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p>Hello, {name}! 👋</p>}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "gray" }}>
        Last deployed: check the commit history to see when this changed
      </p>
    </div>
  );
}

export default App;
