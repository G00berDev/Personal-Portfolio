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
            Styrder Bateman
          </h1>
          <span className="sub-caption">
            My 3D portfolio
          </span>
          <div className="blob">
            <img src={lob} alt="Abstract Blob Design" loading="lazy" width="400" height="400" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
