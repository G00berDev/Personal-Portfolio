import "./App.scss";
import Header from "./components/Header";
import SplineScene from "./components/SplineScene";
import lob from "../src/assets/lob-removebg-preview.png";


function App() {
  return (
    <>
      <SplineScene />
      <div className="app">
        <Header />
        <main>
          <h1 className="caption">
            {'¯|_(ツ)_/¯'} Imagination <b>Creation</b> Hardwork <br />
            Styrder <b>Bateman</b>
          </h1>
          <span className="sub-caption">
            My 3D portfolio
          </span>
          <div className="blob">
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
