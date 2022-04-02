import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import catPic from "./images/cat.png";
import { Link } from "react-scroll";

const ReactRotatingText = require("react-rotating-text");

function App() {
  return (
    <div className="App">
      <img class="catPic" src={catPic} />
      <Navbar />
      <p>Hi! My name is</p>
      <h1>Ciara Cloud</h1>
      <p>I am a software engineer with a background in art and design!</p>
      <h1>
        <ReactRotatingText items={["Coder 💻", "Creative 🎨", "Cat mom 🐈‍⬛"]} />
      </h1>
      <Link to="work" smooth={true} duration={1000}>
        View my work
      </Link>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
