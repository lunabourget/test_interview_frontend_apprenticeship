import './App.css';
import Greetings from './components/taskOne.tsx';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  window.onload = function () {
    setName("Check");
  };

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greetings name={name}/>
        <label>
          change the name
          <br />
          <input type="text" name="change_name" onChange={handleChange} />
        </label>
      </header>
    </div>
  );
}

export default App;
