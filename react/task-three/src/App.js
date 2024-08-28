import "./App.css";
import Displayname from './components/taskThree.tsx'
function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <div className="App">
      <h1 className="title">Name list</h1>
       <Displayname name={names}/>
    </div>
  );
}

export default App;
