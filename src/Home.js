import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Home extends React.Component {
  render() {
     return (    
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
  
              <div className="banner-text">
                <h1>Full Stack Web developer </h1>
  
              <hr/>
  
            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | Java | </p>
  
          <div className="social-links">
  
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/menel-t%C3%BCrki-1a1209128/" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="https://github.com/manelurki" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
  
            {/* Freecodecamp */}
            <a href="https://www.facebook.com/menel.turky" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
  
            {/* Youtube */}
            <a href="https://www.instagram.com/manelturky/?hl=fr" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
  
          </div>
              </div>
            </Cell>
          </Grid>
        </div>
      
    );
  }
}

export default Home;