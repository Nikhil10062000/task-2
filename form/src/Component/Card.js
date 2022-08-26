import React from 'react'
import {Container , Row , Col , Card , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/action'

const Cardd = ({elem}) => {
  const dispatch = useDispatch();
  return (
    <div>
   
      <Container>
      <Row>
       
        <Col xs={{ order: 4}}> 
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={elem.image} />
      <Card.Body>
        <Card.Title>{elem.dishName}</Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(addToCart(elem))}>Select</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Cardd
