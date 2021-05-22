import React from "react";
import "./App.scss";
import Links from "../Links";
import Rocket from "../Rocket";
import Header from "../Header";
import Footer from "../Footer";
import Shapes from "../Shapes";

const App = () => {
  return (
    <div id="content">
      <Header />
      <main className="main">
        <section id="spacex" className="spacex">
          <div className="container">
            <div className="spacex-container">
              <Links />
              <Rocket />
            </div>
          </div>
        </section>
      </main>
      <Shapes />
      <Footer />
    </div>
  );
};

export default App;
