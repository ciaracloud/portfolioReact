import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import illustration from "./images/illustration3.jpg";
import { Link } from "react-scroll";
import Skills from "./components/Skills/Skills";

const ReactRotatingText = require("react-rotating-text");

function App() {
  return (
    <div className="App">
      <img class="illustration" src={illustration} />
      <Navbar />
      <div className="homeText">
        <p>Hi! My name is</p>
        <h1>Ciara Cloud</h1>
        <h2>
          <ReactRotatingText items={["Coder.", "Creative.", "Cat mom."]} />
        </h2>
        <Link
          className="viewWorkButton"
          to="work"
          smooth={true}
          duration={1000}
        >
          View my work
        </Link>
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
