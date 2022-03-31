import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import catPic from "./images/cat.png";

function App() {
  return (
    <div className="App">
      <img class="catPic" src={catPic} />
      <Navbar />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
