import{Container, Row, Col, Button} from "react-bootstrap"
import OffcanvasExample from "./NavCollapse";
import "./Navbar.css"

const Navbar = ()=>{
    return (
   <>
   <div className="navepage">
<Container className="w-100">
 <Row className="d-flex flex-Wrap g-4">
    <Col sm={12} md={6} >
    <h3 className="text-center mt-3 text-md-start mt-2">Simply Natural</h3>
    </Col>
    <Col>
     <OffcanvasExample/>
    </Col>
 </Row>
 <Row>
   <Col>
   <p className="mt-5 fs-4">Best Quality Plants</p>
   </Col>
 </Row>
 <Row>
   <Col>
   <p className="amazing">Amazing Variety <br /> Of plants Starting <br /> Just $12</p>
   </Col>
 </Row>
 <Row>
   <Col>
    
    <Button onMouseEnter={(e)=> e.target.style.backgroundColor = "lightGreen"} onMouseLeave={e=>e.target.style.backgroundColor = "#FC5F5F"} style={{backgroundColor : "#FC5F5F",
      // letterSpacing : 2,
      width: "8rem",
      // fontWeight : "bolder"
    }} className="shop mt-3 rounded-pill border">SHOP NOW</Button>
   </Col>
 </Row>
 
</Container>

   </div>
   </>
    )
}

export default Navbar