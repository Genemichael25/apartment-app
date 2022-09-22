// link to home
// link to all apartments
// link to my apartments
// link to add apartment


import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <Nav className='header-links'>
         
          {!logged_in &&
            <NavItem>
              <a href="/apartmentindex" className="nav-link">View Listings</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>

        <Nav className='header-links'>
          {logged_in &&
            <NavItem>
              <a href="/apartmentindex" className="nav-link">View Listings</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={`/mylistings`} className="nav-link">My Listings</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href="/apartmentnew" className="nav-link">Create Listing</a>
            </NavItem>
          }
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
        </Nav>
      </>
    )
  }
}


export default Header