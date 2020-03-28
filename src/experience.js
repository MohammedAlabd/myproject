import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={8}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
          <h5 style={{marginTop:'0px'}}>{this.props.jobName}</h5>
          <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={8}>
         
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
