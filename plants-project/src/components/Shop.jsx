import { IoMdBasket } from "react-icons/io";
import { useDispatch } from "react-redux";
import { creatCard } from "../redux/plantsAction/plantsAction";



export default function Shop({show, data}) {
 

const dispatch = useDispatch()

const handleValue = ()=>{

  if(data.offPrice){
    dispatch(creatCard({
        src : data.src,
        name : data.name,
        price : data.price,
        offPrice : data.offPrice,
        star : data.stars
    }))
  }else{
    dispatch(creatCard({
      src : data.src,
      name : data.name,
      price : data.price,
      star : data.stars
  }))
  }


}


  return (
    <div onClick={handleValue} className="rounded-pill bg-light position-absolute top-0 end-0" style={{display : show ? "block" : "none",
    width: 32, height: 32, cursor: "pointer"
    }}>
      <IoMdBasket onMouseOut={e=> e.target.classList.remove("text-dark")} onMouseOver={e=> e.target.classList.add("text-dark")} className="fs-3 text-secondary"/>
    </div>
  )
}
