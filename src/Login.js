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
            <hr style={{borderTop: '3px solid #9D845B', width: '100%'}}/>
            <p>I am Manel Turki, web developer from Tunisia. I have an experience in web site design and building, 
        also I am good at PHP and Mysql. I m also enrolled in Re:coded's front-end development bootcamp, 
        where we get a certificate from Flatiron School.
   </p>
            <hr style={{borderTop: '3px solid #9D845B', width: '100%'}}/>
            
            <Skills
                skill="Arabic"
                progress={100}
                />
            
            <Skills
                skill="Turkish"
                progress={100}
                />
                 
            <Skills
                skill="french"
                progress={70}
                />
                 
            <Skills
                skill="English"
                progress={60}
                />
            <hr style={{borderTop: '3px solid #9D845B', width: '100%'}}/>

            <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="React"
                    progress={70}
                    />
                    <Skills
                      skill="php"
                      progress={50}
                      />
                       <Skills
                      skill="java"
                      progress={70}
                      />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h6  style={{fontSize: '30px'}}>Education</h6>


            <Education
              startYear={2017}
              endYear="Present"
              schoolName="Fatih Sultan Mehmet Vakıf Üniversitesi"
              schoolDescription="Computer Engineering"
               />

               <Education
                 startYear="2019 dec"
                 endYear="2020 may"
                 schoolName="Re:Coded "
                 schoolDescription="Front End Development Bootcamp"
                  />
                <hr style={{borderTop: '3px solid white'}} />

                <h6  style={{fontSize: '30px'}}>Experience</h6>

            <Experience
              startYear="2017"
              endYear="2019"
              jobName="OIC INTERN International Intern Office"
              jobDescription=""
              />

              <Experience
                startYear="2019 jul"
                endYear="2019 Aug"
                jobName="Kalite Group"
                jobDescription="Web Developer"
                />
              
              <Experience
                startYear="2016 jul"
                endYear="2016 Aug"
                jobName="Tunus Telekom"
                
                />
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
