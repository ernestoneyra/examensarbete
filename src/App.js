import "./App.css";import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./Constants/routes";
import initFontAwesome from "./Constants/initFontAwesome";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


//import Home from "./Pages/Home/Home";
import Background from "./Pages/Background/Background";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactMe from "./Pages/ContactMe/ContactMe";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";

initFontAwesome();

function App() {
  const [projects, setProjects] = useState([]);

  let getProjects = async () => {
    let res = await fetch(ROUTES.PROJECTS);
    let json = await res.json();
    setProjects(json);
  };
  useEffect(() => {
    getProjects();
  }, []);

  

  return (
    <div className="App">
      <Router>
        <Navbar  />
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Profile />} />
          {/* <Route exact path={ROUTES.HOME} element={<Home />} /> */}
          <Route path={ROUTES.BACKGROUND} element={<Background />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio projects={projects}/>}  />
          <Route path={ROUTES.CONTACT_ME} element={<ContactMe />} />
          <Route path={ROUTES.ABOUT_ME} element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
