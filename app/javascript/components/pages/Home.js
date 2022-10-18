import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

class Home extends Component {
 
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route
    } = this.props

    console.log(sign_in_route)
    return (
      <>
        <div className='home-container'>
          <img src='https://www.ronenbekerman.com/wp-content/uploads/2019/03/d2a2adfb3fb77c7fbafb04eaa4a7dd36-1920x1080.jpg'
            style={{width:"100vh",height:"auto"}}/>
          <div className="home-text">
            <div >
              Welcome
            </div>
            <div className='home-text2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non accumsan cursus tristique parturient faucibus cras non amet lectus. Placerat netus viverra tincidunt sed enim varius volutpat sed. Commodo arcu mauris nisl malesuada tincidunt enim. Amet, mauris scelerisque morbi penatibus sodales scelerisque sed. Adipiscing purus aliquam dui mi, sit dui lorem sit mattis. Consequat nunc congue arcu tempor ut iaculis risus nunc consectetur.
            </div>
            <div >
            <NavLink to={"/users/sign_in"}>
              <Button className="home-buttons" >
    
                Sign-In
              
              </Button>
            </NavLink>
              <Button className="home-buttons">
                Sign-Up
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}





export default Home; 