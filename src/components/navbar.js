import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import banner from './banner.png'

function NavBar() {
 return (
   <>
     <Navbar>
       <Container>
         <Navbar.Brand href="/login">
         <h1>El aroma mágico</h1>
          <hr></hr>
          <img src={banner} alt={"logo"}/> 
          </Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;  