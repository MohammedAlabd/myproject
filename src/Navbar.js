import React from 'react'
import { NavLink } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Link } from 'react-router-dom';
import './cv.css';
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header transparent title="Title" style={{color: 'white'}}>
              <Navigation>
              <Link to="/Home">Home</Link>
                <Link to="/Login">Cv</Link>
                <Link to="/About">Projects</Link>
                <Link to="/contact">contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
              <Link to="/Home">Home</Link>
                <Link to="/Login">Cv</Link>
                <Link to="/About">Projects</Link>
                <Link to="/contact">contact</Link>
               
              </Navigation>
          </Drawer>
          <Content /><h2>MANEL TURKI</h2>
      </Layout>
  </div>
    )
  }
}

export default Navbar;