import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button, Card, CardText ,CardTitle,CardActions} from 'react-mdl';

class About extends React.Component {
  render() {
    return(
      <div> <Grid className="demo-grid-1">
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://www.admecindia.co.in/sites/default/files/online-training_Institute.gif) no-repeat ' ,backgroundSize:'320px 200px'}}></CardTitle>
    <CardText>
    “Study Soon” Project is an online education platform through which individuals have access to online courses.
    </CardText>
    <CardActions border>
        <Button colored><a  style={{ color:'#8f7f55'}} href="https://manelurki.github.io/study-soon/studySoon/index.html">Go to project</a></Button>
    </CardActions>
</Card></Cell>
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://data.whicdn.com/images/298934928/original.gif) bottom right 15% no-repeat #46B6AC',backgroundSize:'320px 200px'}}></CardTitle>
    <CardText>
   the project is about an online menu of all the pizzas that the pizzeria offers.
    </CardText>
    <CardActions border>
        <Button colored><a style={{ color:'#8f7f55'}}  href="https://github.com/manelurki/pizza-project">go to project</a></Button>
    </CardActions>
</Card></Cell>
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://media2.giphy.com/media/ln7z2eWriiQAllfVcn/source.gif) ',backgroundSize:'320px 200px'}}></CardTitle>
    <CardText>
        This is my reposity in github that contains all my javascript projects
    </CardText>
    <CardActions border>
        <Button colored><a  style={{ color:'#8f7f55'}}  href="https://manelurki.github.io/javascript/">go to projects</a></Button>
    </CardActions>
</Card></Cell>
  </Grid>
  
  
  <Grid className="demo-grid-1">
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://khanacademy.zendesk.com/hc/article_attachments/360004358412/mini_game.gif) bottom right 15% no-repeat #46B6AC',backgroundSize:'320px 220px'}}></CardTitle>
    <CardText>
   A maze game with javascript code
    </CardText>
    <CardActions border>
        <Button colored><a style={{ color:'#8f7f55'}}  href="https://manelurki.github.io/javascript/maze.html">go to project</a></Button>
    </CardActions>
</Card></Cell>
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://thumbs.gfycat.com/ImpishUnequaledIchneumonfly-size_restricted.gif) bottom right 15% no-repeat #46B6AC',backgroundSize:'350px 250px'}}></CardTitle>
    <CardText>
   Some animation with javascript code.
    </CardText>
    <CardActions border>
        <Button colored><a style={{ color:'#8f7f55'}}  href="https://manelurki.github.io/javascript/homework3/homework3.html">go to project</a></Button>
    </CardActions>
</Card></Cell>
      <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', background: 'url(https://www.meteoricsolutions.com/wp-content/uploads/2019/10/Learning-GIF.gif) bottom right 15% no-repeat #46B6AC',backgroundSize:'320px 200px'}}></CardTitle>
    <CardText>
   this project is about students managment system by using fetch function .
    </CardText>
    <CardActions border>
        <Button colored><a style={{ color:'#8f7f55'}} href="https://manelurki.github.io/javascript/HOMEWORK2/test.html">go to project</a></Button>
    </CardActions>
</Card></Cell>
  </Grid></div>
    )
  }
}

export default About;