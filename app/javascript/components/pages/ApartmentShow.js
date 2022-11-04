import React, { Component } from 'react'
import { 
  Button, 
  Card, 
  CardTitle, 
  Col, 
  Row, 
  Container, 
  CardImg,
  CardBody,
  CardSubtitle,
  CardText
} from 'reactstrap'
import { NavLink, Redirect } from 'react-router-dom'

class ApartmentShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
        success: false
    }
  }
  render() {
    let { apartment } = this.props

    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    console.log(logged_in)
    console.log(apartment?.user_id)
    console.log(current_user?.id)
    return (
      <>
        <div className='background'>
        <Container fluid>
          <Row className="apartment">
            <Col md="6">
              <Card className="info-card" style={{height:"auto"}} body>
                <CardImg src={apartment?.image}/>
                <CardBody style={{color:"black"}}>
                  <CardTitle >
                    <strong>{ apartment?.price } / month</strong>
                  </CardTitle>
                  <CardSubtitle >
                    <p >{apartment?.street} {apartment?.city}, { apartment?.state }</p>
                    <p>{ apartment?.bedrooms } Bedroom, { apartment?.bathrooms } Bath</p>
                    <p>Pets: { apartment?.pets }</p>
                  </CardSubtitle>
                    <br/>
                  <div >
                    <h5>Contact Us!</h5>
                    <p>Manager: { apartment?.manager }</p>
                    <p>Email: { apartment?.email }</p>
                  </div>
                  {(logged_in && current_user?.id === apartment?.user_id) && 
                  <>
                  <Button className='button'><NavLink to={`/apartmentedit/${apartment?.id}`}>Edit Listing</NavLink> </Button>
                  <Button className='button'><NavLink to="">Delete Listing</NavLink> </Button>
                  </>
                  }
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </>
    )
  }
}

export default ApartmentShow