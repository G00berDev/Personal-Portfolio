import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer"; // Import the Footer component
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
          <span className="sub-caption">My 3D portfolio</span>
          <div className="blob"></div>
        </main>
        <Footer // Footer component included
          logo={lob} // Pass the logo prop
          about={{
            Home: "#home",
            About: "#about",
            Projects: "#projects",
            Contact: "#contact",
          }}
          socialLinks={{
            github: "https://github.com",
            instagram: "https://instagram.com",
            facebook: "https://facebook.com",
          }}
          services={[
            "3D Modeling",
            "Web Development",
            "Creative Design",
          ]}
        />
      </div>
    </>
  );
}

export default App;
