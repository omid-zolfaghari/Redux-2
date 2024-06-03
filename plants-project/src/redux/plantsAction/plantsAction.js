import { CREATE, DELETE } from "../actions/action";

const creatCard = (data)=>{
return {
    type : CREATE,
    payload: data
}
}

const deleteCard = (id)=>{
    return {
        type : DELETE,
        payload : id
    }
}


export {creatCard, deleteCard}