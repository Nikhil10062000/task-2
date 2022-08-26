import { ADD_TO_CART } from "./constants";




const cart =(state =[] , action)=>{
    switch(action.type){
    
        case ADD_TO_CART :
           let value = [...state ,action.payload]
           
            return [...value ]
            
         
            default :
           return state;
          
    }
    }
    export default cart