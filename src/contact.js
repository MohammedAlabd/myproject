import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import Logo from './unnamed.gif'
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            
            <img
                
                src={Logo}
              alt="avatar"
              style={{height: '250px'}}
               />
             <h1 style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Get In Touch</h1>
<h3>Are you interested in working with me or just have a question?</h3>

<h5>Email me at <a style={{ color:'black'}} href="mailto:menelturki@gmailcom?Subject=Hello%20again" target="_top">menelturki@gmail.com</a></h5>

          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Contact;
