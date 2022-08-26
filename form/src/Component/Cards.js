import React, { useState } from "react";
import { Container, Row, Col, Card  } from "react-bootstrap";

const Cards = ({  elem }) => {
  const [rank, setrank] = useState()
  
  const chance= (e) => {
    setrank(e)
  }

  return (
    <div>
       <form>
      <Container>
        <Row>
          <Col xs={{ order: 4 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={elem.image} />
              <Card.Body>
                <Card.Title>{elem.dishName}</Card.Title>
                <Card.Text>{elem.description}</Card.Text>
              </Card.Body>
              
      <select 
        onChange={(event) => chance(event.target.value)}
        value={rank}
      >
        <option value="one" >Rank 1</option>
        <option value="two">Rank 2</option>
        <option value="three">Rank 3</option>
      
      </select>
   
            </Card>
          </Col>
        </Row>
      </Container>
      
      </form>
      
    </div>
  );
};

export default Cards;
