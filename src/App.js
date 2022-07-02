import './App.css';
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div className="App">
          <span style={{color: 'white'}}>
            <Hero/>
            <Programs/>
          </span>
    </div>
  );
}

export default App;
