import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Cardd from "./Card";
import Load from './Load'
import { Link} from 'react-router-dom'
const Dish = () => {
  const [dish, setDish] = useState();
  const [ load , setLoad] = useState(true);
  

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    const fetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDish(data);
      setLoad(false);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <div>
            <h1>Select any three for Poll</h1>
            <li>
            <Link to="/cart">Cart</Link>
          </li>
        </div>
        {
            load ? <Load/> : 
            
            <Row>
            {dish.map((elem, idx) => {
              return (
                <Col sm={4} key={idx}>
                  
                  <Cardd elem={elem} />
                </Col>
              );
            })}
          </Row>
        }
       
      </div>
    </>
  );
};

export default Dish;
