import './App.css';
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";

function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Programs/>
            <Reasons/>
          </span>
    </div>
  );
}

export default App;
