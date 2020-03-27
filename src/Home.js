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
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
             <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
  
            {/* Github */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
  
            {/* Freecodecamp */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-free-code-camp" aria-hidden="true" />
            </a>
  
            {/* Youtube */}
            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true" />
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