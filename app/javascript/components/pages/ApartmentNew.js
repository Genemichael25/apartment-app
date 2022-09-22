import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

export default class ApartmentNew extends Component {
  constructor(props){
    super(props)
      this.state = {
        newApartment: {
          street: '',
          city: '',
          state: '',
          manager: '',
          email: '',
          price: '',
          bedrooms: '',
          bathrooms: '',
          pets: '',
          image: '',
          user_id: this.props.current_user.id
        },
        submitted: false
      }
  }

  handleChange = (e) => {
    let {newApartment} = this.state
    newApartment[e.target.name] = e.target.value
    this.setState({newApartment: newApartment})
  }

  handleSubmit = () => {
    this.props.createApartment(this.state.newApartment)
    this.setState({submitted: true})
  }

  render() {
    return (
      <>
        <div className='background'>
        <h2>New Listing</h2>
        <Form style={{backgroundColor:"#EAE2D4", padding:"25px",margin:"25px"}}>
          <div className='groups'>
          <FormGroup className='fields'>
            <Label for="street">Street:</Label>
            <Input
              className='input'
              type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.newApartment.street}
            />
          </FormGroup>
          <FormGroup className='fields'>
            <Label for="city">City:</Label>
            <Input
              className='input'
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.newApartment.city}
            />
          </FormGroup> 
          <FormGroup className='fields'>
            <Label for="state">State:</Label>
            <Input
              className='inputshort'
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.newApartment.state}
              />
          </FormGroup>
          </div>
          <div className='groups'>
          <FormGroup className='fields'>
            <Label for="price">Price:</Label>
            <Input
              className='input'
              type="text"
              name="price"
              onChange={this.handleChange}
              value={this.state.newApartment.price}
            />
          </FormGroup>
          <FormGroup className='fields'>
            <Label for="bedrooms">Bedrooms:</Label>
            <Input
              className='inputshort'
              type="text"
              name="bedrooms"
              onChange={this.handleChange}
              value={this.state.newApartment.bedrooms}
              />
          </FormGroup>
          <FormGroup className='fields'>
            <Label for="bathrooms">Bathrooms:</Label>
            <Input
              className='inputshort'
              type="text"
              name="bathrooms"
              onChange={this.handleChange}
              value={this.state.newApartment.bathrooms}
              />
          </FormGroup>
          </div>
          <div className='groups'>
          <FormGroup className='fields'>
            <Label for="pets">Pets:</Label>
            <Input
              className='input'
              type="text"
              name="pets"
              onChange={this.handleChange}
              value={this.state.newApartment.pets}
            />
          </FormGroup>
          <FormGroup className='fields'>
            <Label for="image">Image:</Label>
            <Input
              className='input'
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.newApartment.image}
            />
          </FormGroup>
          </div>
          <div className='groups'>
          <FormGroup className='fields'>
            <Label for="manager">Manager:</Label>
            <Input
              className='input'
              type="text"
              name="manager"
              onChange={this.handleChange}
              value={this.state.newApartment.manager}
            />
          </FormGroup>
          <FormGroup className='fields'>
            <Label for="email">Email:</Label>
            <Input
              className='input'
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.newApartment.email}
            />
          </FormGroup>
          </div>
          <Button 
            className='button'
            name="submit" 
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        </div>
      </>
    )
  }
}
