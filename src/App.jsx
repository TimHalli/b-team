import { useState } from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
import HomePage from "./components/HomePage";
import { Route, Switch, NavLink } from "react-router-dom";

function App() {
  const [flag, setFlag] = useState(false);

  function changeMode() {
    const mode = document.querySelector("#link");
    const darkly = "https://bootswatch.com/4/darkly/bootstrap.min.css";
    const flatly = "https://bootswatch.com/4/flatly/bootstrap.min.css";

    mode.href === darkly
      ? mode.setAttribute("href", flatly)
      : mode.setAttribute("href", darkly);
  }

  const styles = {
    img: {
      height: "250",
      backgroundImage:
        "url(https://assets.weforum.org/report/image/knJgP4WBIFElZ-EYVat9EEXFh1pM1RoidLg5P-voSCs.png)",
        backgroundSize: 'auto',
       
    },

    header: { color: "white", textAlign: "center" },
  };

  const iconToggle = () => {
    setFlag((prev) => !prev);

    const navBar = document.querySelector("#navbarColor01");

    flag ? navBar.classList.add("show") : navBar.classList.remove("show");
  };

  return (
    <div>
      <div style={styles.img}>
        <button
          style={{ position: "fixed", zIndex:1 }}
          type="button"
          onClick={changeMode}
          className="btn btn-primary btn-sm"
        >
          Switch Mode
        </button>
        <br />
        <br />
        
        <div style={styles.header}>
          <h1>B Team</h1>
          <h3>Marketing solutions</h3>
        </div>
        <br />
        <br />
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span onClick={iconToggle} className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                activeClassName="nav-link"
                className="nav-link"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="contact-us"
                activeClassName="nav-link"
                className="nav-link"
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="nav-link"
                className="nav-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                activeClassName="nav-link"
                className="nav-link"
              >
                Gallery
              </NavLink>
            </li>{" "}
          </ul>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/contact-us" component={() => <ContactUs />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/gallery" component={() => <Gallery />} />
      </Switch>

      <br />
      <hr />
    </div>
  );
}

export default App;
