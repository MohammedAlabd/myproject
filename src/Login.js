import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Logo from './aa.jpg';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
               src={Logo}

                alt="avatar"
                style={{width: '400px'}}
                 />
            </div>

            <h4 style={{color: 'grey',textAlign:'center'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #9D845B', width: '50%'}}/>
            <p>I am Manel Turki, web developer from Tunisia. I have an experience in web site design and building, 
        also I am good at PHP and Mysql. I m also enrolled in Re:coded's front-end development bootcamp, 
        where we get a certificate from Flatiron School.
   </p>
            <hr style={{borderTop: '3px solid #9D845B', width: '50%'}}/>
            <h5>aa</h5>
            <p>a</p>
            <h5>ae</h5>
            <p>a</p>
            <h5>a</h5>
            <p>a</p>
            <h5>a</h5>
            <p>a</p>
            <hr style={{borderTop: '3px solid #9D845B', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription=""
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName=""
                 schoolDescription=""
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription=""
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
