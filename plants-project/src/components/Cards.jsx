import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"
import { FaRegStar } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
// import { IoBasketOutline } from "react-icons/io5";
import { useState } from "react";
import Shop from "./Shop";



export default function Cards() {

const card = useSelector(store => store.allPlants);

const stars = (quantity)=>{
  let counter = quantity
 const arr = ["", "", "", "", ""];
 return arr.map((ele, i)=>{

  counter--
   if(counter >= 0){
    return <GoStarFill key={i} className="text-warning"/>
   }else{
    return <FaRegStar key={i}/>
   }
 
})
}

const [basket, setBasket] = useState(false)


const handleHover = ()=>{
 setBasket(true)
}

const handleOut = ()=>{
  setBasket(false)
}


  return (
    <div className="container justify-content-center mt-5 d-flex flex-wrap gap-5">
      {card.map((plant, i)=>{
       return (
       <Card onMouseOut={handleOut} onMouseOver={handleHover} key={i} className="border-0 position-relative" style={{width: "17rem"}}>
        
         
        <Shop data = {plant} show = {basket}/>
            
            <Card.Img variant="top" src={plant.src}></Card.Img>
            <Card.Body>

            <Card.Text>{plant.type}</Card.Text>
            <Card.Title>{plant.name}</Card.Title>
            <Card.Text>{stars(plant.stars)}</Card.Text>
            
                    
            {plant.offPrice ? <div className="d-flex"><Card.Text className="fs-5" style={{
                color : "gray",
                textDecoration : "line-through"
            }}>${parseInt(plant.price).toFixed(2)}</Card.Text><Card.Text className="fs-5">{"-"}${parseInt(plant.offPrice).toFixed(2)}</Card.Text></div> : <Card.Text className="fs-5">${parseInt(plant.price).toFixed(2)}</Card.Text>}
                    
            </Card.Body>
        </Card>
       )
      })}
    </div>
  )
}
