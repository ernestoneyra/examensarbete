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
  const [profile, setProfile] = useState([])
  const [interests, setInterests] = useState([])
  const [education, setEducation] = useState([])
  const [work, setWork] = useState([])


  //PROJECTS
  let getProjects = async () => {
    let res = await fetch(ROUTES.PROJECTS);
    let json = await res.json();
    setProjects(json);
  };
  useEffect(() => {
    getProjects();
  }, []);


  //PROFILE
  let getProfile = async () => {
    let res = await fetch(ROUTES.USER)
    let json = await res.json()
    setProfile(json)
  }
  useEffect(() => {
    getProfile()
  }, [])
  

  //INTERESTS
  let getinterests = async () => {
    let res = await fetch(ROUTES.INTERESTS)
    let json = await res.json()
    setInterests(json)
  }
 useEffect(() => {
   getinterests()
 }, [])


 //WORK
 let getWork = async () => {
   let res = await fetch(ROUTES.WORK)
   let json = await res.json()
   setWork(json)
 }
 useEffect(() => {
   getWork()
 },[])


 //EDUCATION
 let getEducation = async () => {
   let res = await fetch(ROUTES.EDUCATION)
   let json = await res.json()
   setEducation(json)
 }
 useEffect(() => {
   getEducation()
 },[])

 

  return (
    <div className="App">
      <Router>
        <Navbar  />
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Profile />} />
          {/* <Route exact path={ROUTES.HOME} element={<Home />} /> */}
          <Route path={ROUTES.BACKGROUND} element={<Background  works={work} educations={education} />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio projects={projects}/>}  />
          <Route path={ROUTES.CONTACT_ME} element={<ContactMe />} />
          <Route path={ROUTES.ABOUT_ME} element={<AboutMe profiles={profile} interests={interests} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
