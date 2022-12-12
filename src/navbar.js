import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Yläpalkki() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Valuuttamuunnin</Navbar.Brand>
          <Nav className="my-2 my-sm-0 ">
            
            <Nav.Link href="#About ">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Yläpalkki;