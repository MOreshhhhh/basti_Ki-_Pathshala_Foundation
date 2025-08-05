import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import VolunteerForm from "./components/VolunteerForm";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{background:"#FFD600"}}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home" style={{fontWeight:"900",fontSize:"1.7rem",color: "#292b2c"}}>
            <img src={require('./images/logo.jpg')} height="50" className="me-3 rounded-4 shadow" alt="Logo"/>
            Basti Ki Pathshala
          </a>
          <button className="btn btn-dark ms-auto px-4 py-2 shadow" 
            style={{fontWeight:700,letterSpacing:1}} 
            onClick={()=>window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})}
          >Volunteer</button>
        </div>
      </nav>
      <HomePage />
      <main className="container">
        <AboutUs />
        <VolunteerForm />
      </main>
      <footer 
        className="text-center text-white py-3 mt-5" 
        style={{background:"#292b2c",borderTopLeftRadius:"32px",borderTopRightRadius:"32px"}}
      >
        <div className="container">
          &copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation — Where learning knows no boundaries.
        </div>
      </footer>
    </>
  );
}
export default App;
