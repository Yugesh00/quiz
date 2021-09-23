import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
const Main = () => {
  return (
      <div className="center">
    <MDBContainer className="center">
    <MDBRow>
    <MDBCol sm="3"></MDBCol>
     <MDBCol sm="6">
     <div className="bg" style={{padding:'2%'}}>
     Choose a level
   </div>
     </MDBCol>
     <MDBCol sm="3"></MDBCol>
     </MDBRow>
    
    </MDBContainer>
         <br/>
    <MDBContainer>
    <MDBRow>
    <MDBCol sm="3"></MDBCol>
     <MDBCol sm="3">
     <Link to={"/quiz"}>
     <button className="button" style={{width:'100%'}}>
     Technical
      </button>
     </Link>

     </MDBCol>
     <MDBCol sm="3">
     <Link to={"/quiz"}>
     <button className="button" style={{width:'100%'}}>
     Fun
     </button>
     </Link>
   
     </MDBCol>
     <MDBCol sm="3"></MDBCol>
     </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Main;
