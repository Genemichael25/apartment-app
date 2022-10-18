import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

// form is added to apartment edit page and inputs are setting state on component


export default class ApartmentEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
              street: this.props.apartment?.street|| "",
              city: this.props.apartment?.city|| "",
              state: this.props.apartment?.state || "",
              manager: this.props.apartment?.manager || "",
              email: this.props.apartment?.email|| "",
              price: this.props.apartment?.price || "",
              bedrooms: this.props.apartment?.bedrooms || 0,
              bathrooms: this.props.apartment?.bathrooms || 0,
              pets: this.props.apartment?.pets || "",
            },
          success : false
        }
    }

    handleChange = (e) => {
        const { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form })
    }

    handleSubmit = (e) => { 
      this.props.updateApartment(this.state.form, this.props.apartment.id)
      this.setState({ success: true })
      // e.preventDefault()
    }
  
    render() {
      console.log(this.state.form)
      return (
        <>
          <div className='background'>
          <h2>Edit Listing</h2>
          <Form style={{backgroundColor:"#EAE2D4", padding:"25px",margin:"25px"}}>
          <div className='groups'>
            <FormGroup className='fields'>
              <Label for="street">Street:</Label>
              <Input
                className='input'
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.form.street}
              />
            </FormGroup>
            <FormGroup className='fields'>
              <Label for="city">City:</Label>
              <Input
                className='input'
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.form.city}
              />
            </FormGroup> 
            <FormGroup className='fields'>
              <Label for="state">State:</Label>
              <Input
                className='inputshort'
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.form.state}
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
                value={this.state.form.price}
              />
            </FormGroup>
            <FormGroup className='fields'>
              <Label for="bedrooms">Bedrooms:</Label>
              <Input
                className='inputshort'
                type="text"
                name="bedrooms"
                onChange={this.handleChange}
                value={this.state.form.bedrooms}
              />
            </FormGroup>
            <FormGroup className='fields'>
              <Label for="bathrooms">Bathrooms:</Label>
              <Input
                className='inputshort'
                type="text"
                name="bathrooms"
                onChange={this.handleChange}
                value={this.state.form.bathrooms}
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
                value={this.state.form.pets}
              />
            </FormGroup>
            <FormGroup className='fields'>
              <Label for="image">Image:</Label>
              <Input
                className='inputlong'
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.state.form.image}
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
                value={this.state.form.manager}
              />
            </FormGroup>
            <FormGroup className='fields'>
              <Label for="email">Email:</Label>
              <Input
                className='inputlong'
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>
            </div>
            <Button 
              name="submit" 
              onClick={this.handleSubmit}>
              Submit
            </Button>
          
            {this.state.success && <Redirect to={'/mylistings/'} />}

          </Form>
          </div>
        </>
      )
    }
  }
