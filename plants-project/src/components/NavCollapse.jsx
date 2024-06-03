import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCartOutline } from "react-icons/io5";

import { useSelector } from 'react-redux';



function OffcanvasExample() {
const plant = useSelector(store=> store.plants);
// console.log(plant);

// const [totalPrice, setTotalPrice] = useState(0)
// 
// setTotalPrice(totalPrice + parseInt(plant.price))

// let initValue = 0

let sum = 0

plant.forEach(element => {
  console.log(element);
  if(element.offPrice){
   sum += parseFloat(element.offPrice)
  }else{
  sum += parseFloat(element.price)
  }
})

const handleHoverNav = (e)=>{
  e.target.classList.add("text-danger")
}

const handleHoverOutNav = (e)=>{
  e.target.classList.remove("text-danger")
}


  return (
    <>
      
        <Navbar expand={"sm md"} className="bg-body-light mt-2 mb-3">
          <Container fluid className='flex-md-row-reverse justify-content-around'>


            <Navbar.Brand href="#">${sum.toFixed(2)}<IoCartOutline className='fs-2'/></Navbar.Brand>


            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm"
              aria-labelledby="offcanvasNavbarLabel-expand-sm"
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-evenly flex-grow-1 pe-3">
                  <Nav.Link style={{color : "crimson"}} onMouseOver={handleHoverNav} onMouseOut={handleHoverOutNav} className='active text-center fs-5' href="#action1">Home</Nav.Link>
                  <Nav.Link onMouseOver={handleHoverNav} onMouseOut={handleHoverOutNav} className='text-center fs-5' href="#action2">About</Nav.Link>
                  <Nav.Link onMouseOver={handleHoverNav} onMouseOut={handleHoverOutNav} className='text-center fs-5' href="#action2">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
    </>
  );
}

export default OffcanvasExample;