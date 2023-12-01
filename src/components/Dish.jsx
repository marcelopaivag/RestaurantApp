import React from 'react'
import { useParams } from 'react-router-dom'
import dishes from '../assets/japDishes'
import { Button, Card, Col, Row } from 'react-bootstrap';

export const Dish = () => {
const { id } = useParams()
const dishSelected = dishes.filter(dish => dish.id === id)
console.log(dishSelected)
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{dishSelected[0].title}</Card.Title>
        <Card.Text>{dishSelected[0].description}</Card.Text>
        <Card.Text>{dishSelected[0].price}</Card.Text>
        <Button variant="primary">Comprar ahora!</Button>
      </Card.Body>
    </Card>
    </>
  )
}