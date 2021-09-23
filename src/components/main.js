import logo from '../pslLogo1.png';
import 'mdbreact/dist/css/mdb.css';
import Question from './question'
import { MDBContainer, MDBRow, MDBCol,MDBNavLink } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="App"> 
      <header className="App-header">
      <div className="bg" style={{padding:'2%'}}>
      <img src={logo} className="App-logo" alt="logo" />
      </div> 
      <br/>
      <Link to={"/selection"}>
      <button>
         <span style={{fontWeight:'14px'}}>
         Let's Begin
         </span>
         
        </button>
        </Link>
        
      </header>
        </div>
  );
}

export default Main;
