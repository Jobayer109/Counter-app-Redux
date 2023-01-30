import "./App.css";
import Counter from "./Features/Counter/Counter";
import PostView from "./Features/ToDos/PostView";

function App() {
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <Counter />
      <PostView />
    </div>
  );
}

export default App;
