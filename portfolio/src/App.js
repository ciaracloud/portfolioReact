import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import illustration from "./images/illustration3.jpg";
import ResumeAndContact from "./components/ResumeAndContact/ResumeAndContact";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <img class="illustration" src={illustration} />
      <Navbar />
      <Home />
      <About />
      <Work />
      <ResumeAndContact />
      <Footer />
    </div>
  );
}

export default App;
