import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MyForm from './MyForm'
import Logo from './qq.gif'
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <MyForm  />
            

          </Cell>
          <Cell col={6}>
            
          <img
               src={Logo}

                alt="avatar"
                style={{width: '350px'}}
                 />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
