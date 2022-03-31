import "./App.css";
import AppPageContainer from "./components/AppPageContainer";
import catPic from "./images/cat.png";

function App() {
  return (
    <div className="App">
      <img class="catPic" src={catPic} />
      <AppPageContainer />
    </div>
  );
}

export default App;
