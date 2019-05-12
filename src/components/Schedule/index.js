import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventPlan from '../../data/event-plan';
import './style.scss';


class Schedule extends React.Component {
  state = {
    drawerOpen: false,
    drawerContent: ''
  }
  toggleDrawer = (open, content) => () => {
    this.setState({
      drawerOpen: open,
      drawerContent: content
    });
    console.log('.....................', this.state.drawerContent)
  };
  render() {
    return (
      <section className="event-plan">
        <List className="event-plan__wrapper sections-list" subheader={
          <li classes={{ root: 'section-list__header' }} sticky={false} />
        }>
          {EventPlan.map((item, index) => (
            <li key={`section-${index}`} className="sections-list__item">
              <ul className="inner-list">
                <ListSubheader className="inner-list__header">{item.title}</ListSubheader>
                {item.items.map((item, index) => (
                  <ListItem key={index} className="inner-list__item">
                    <Card className='card'>
                      <CardContent>
                        <Typography className='title' color="textSecondary" gutterBottom>
                          {item.time}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {item.title}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={this.toggleDrawer(true, item)}>More</Button>
                      </CardActions>
                    </Card>
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
        <Drawer
          anchor="right"
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer(false, null)}
          className='detailsDrawer'
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false, null)}
            onKeyDown={this.toggleDrawer(false, null)}
          >
            <i className="material-icons">
              arrow_forward
            </i>
          </div>
          <div className='detailsDrawer__content'>
          {this.state.drawerContent && this.state.drawerContent.time &&
            <Typography className='title' color="textSecondary" gutterBottom>
              {this.state.drawerContent.time}
            </Typography>
          }
          {this.state.drawerContent && this.state.drawerContent.title &&
            <Typography variant="h5" component="h2">
              {this.state.drawerContent.title}
            </Typography>
          }
          {this.state.drawerContent && this.state.drawerContent.place &&
            <Typography className='pos' color="textSecondary">
              {this.state.drawerContent.place}
            </Typography>
          }
          {this.state.drawerContent && this.state.drawerContent.description &&
            <Typography component="p">
              {this.state.drawerContent.description}

            </Typography>}
            </div>
        </Drawer>
      </section>

    )

  }
}
export default Schedule;