import "./App.css";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import { Routes, Route } from "react-router-dom";
import OriginalHomepage from "./components/OriginalHomepage/OriginalHomepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OriginalHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
