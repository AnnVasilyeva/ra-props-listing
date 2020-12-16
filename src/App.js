import './App.css';
import Listing from "./components/Listing";
import Data from "./models/Data";

function App() {

  return (
    <div className="App">
      <Listing items={Data}/>

    </div>
  );
}

export default App;
