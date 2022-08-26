import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";

import { Link } from "react-router-dom";

const Cart = () => {
 
  const result = useSelector((state) => state.cart);
  
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  let limited = removeDuplicates(result);
  function limit(arrs) {
    for (let i = 0; i <= 3; i++) {
      return arrs;
    }
  }
   limit(limited);
   

  return (
    <div>
      {limited.map((elem, id) => {
        return (
          <>
          
            <Cards elem={elem} key={id}  />
           
          </>
        );
      })}
      <li>
        <Link to="/">Back to Dishes</Link>
      </li>
    </div>
  );
};

export default Cart;
