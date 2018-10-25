import React, { Component } from 'react';
import RecipeTag from './RecipeTag';
import {  List,ListItem,ListItemText,
          Card,CardHeader,CardContent,CardActionArea,CardActions,
          Divider,
          Tab,Tabs,AppBar,Typography,
          BottomNav,IconButton,
          FormLabel} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import {Favorite,Share} from '@material-ui/icons'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Recipe extends Component {
  state = {
    tabNumber: 0
  }
  handleTabSwitch = (e,value)=>{
    this.setState({tabNumber: value})
  }
  handleChangeIndex = index => {
    this.setState({ tabNumber: index });
  }
  render() {
    const {recipe: {name,subtitle,description,ingredients,instructions,tags,author}} = this.props;
    return (
      <Card raised>
        <CardHeader title={name} subheader={subtitle}/>
        <CardContent>
          <AppBar color='default' position='relative'>
            <Tabs
              fullWidth
              value={this.state.tabNumber}
              onChange={this.handleTabSwitch}
              >
              <Tab label='Description' />
              <Tab label='Ingredients' />
              <Tab label='Instructions'/>
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis='x'
            index={this.state.tabNumber}
            onChangeIndex={this.handleChangeIndex}
          >
              <TabContainer>
                  {description}
              </TabContainer>
              <TabContainer>
                <List>
                {ingredients.map((ingredient)=>
                  <ListItem>
                    <ListItemText primary={`${ingredient.ingredient} - ${ingredient.amount} ${ingredient.units}`} />
                  </ListItem>
                  )}
                </List>
              </TabContainer>
              <TabContainer>
                  <List>
                    { instructions.map((instruction)=><ListItem>
                      <ListItemText primary={`${instruction.order + 1}. ${instruction.description}`}/>
                    </ListItem>)}
                  </List>
              </TabContainer>
          </SwipeableViews>
          <CardActions>
            <IconButton>
              <Favorite />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          <div className="footer-tags">
            <List>
            {
              this.props.recipe.tags.map(
                (tag)=> <RecipeTag tag={tag} />
              )
            }
            </List>
          </div>
      </CardActions>
      </CardContent>
      </Card>
    );
  }

}

export default Recipe;
