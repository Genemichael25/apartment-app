import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { CardGroup, CardImg } from 'reactstrap'
import { Button, Card, CardBody, CardTitle, CardText, Container, Col } from 'reactstrap'

export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <div className='background'>
      <Container className='indexText'>
        <h2>Recent Listings</h2>
      </Container>

      <Container>
        <CardGroup>
          {this.props.apartments && this.props.apartments.map((apartment, index) => {
            return (
              <Col key={index} sm='4' md='4' lg='4'>
                <Card className='info-card'>
                  <CardImg top width='100%' src={apartment.image} alt='Card image cap' />
                    <CardBody>
                      <CardTitle>
                        <strong>{apartment.price} /month</strong>
                      </CardTitle>
                      <CardText>
                        {apartment.street} {apartment.city}, {apartment.state}
                        <br/>
                        {apartment.bedrooms} bedrooms, {apartment.bathrooms} bath
                      </CardText>
                    </CardBody>
                      <Button className='button'>
                        <NavLink to={`/apartmentshow/${apartment.id}`}>More Details</NavLink>
                      </Button>
                </Card>
              </Col>
            )
          }
          )}
        </CardGroup>
      </Container>
      </div>
      </>
    )
  }
}