import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Row, Button, CardImg} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ProtectedApartmentIndex extends Component {
  render() {
    const {
        logged_in,
        current_user,
        apartments
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log(this.props.apartments)
    return (
      <>
        <div className='background'>
        <h2>My Listings</h2>
        <div className='myuserlistings'>
            <Row sm='3'>
            {apartments && apartments.map(apartment => {
                return(
                <Card key={apartment.id} className="info-card">
                    <CardImg alt='apartment image' src= {apartment.image} top width="100%"></CardImg>
                    <CardBody>
                        <CardTitle>
                            <strong>{apartment.price} / month</strong>
                        </CardTitle>
                        <CardSubtitle>
                            {apartment.street}, {apartment.city}, {apartment.state}
                        </CardSubtitle>
                        <CardSubtitle>
                            {apartment.bedrooms} Bedroom, {apartment.bathrooms} Bath
                        </CardSubtitle>
                        <Button className='button'>
                            <NavLink to={`/apartmentshow/${apartment.id}`}>More Details</NavLink>
                        </Button>
                    </CardBody>
                </Card>)
            })}
            </Row>
        </div>
        </div>
      </>
    )
  }
}

export default ProtectedApartmentIndex