import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom'
import { Layout, Menu, Icon} from 'antd';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import "antd/dist/antd.css";
import './App.scss';

import Budget from './components/Budget';
import Todo from './components/Todo';
import GuestsList from './components/GuestsList';
import Contacts from './components/Contacts';
import Schedule from './components/Schedule';

// const { Sider } = Layout;
const {Sider, Content} = Layout;
const drawerWidth = 240;


const Main = () => (
  <main>
    <Switch>
      {/* <Route path="/" component={Home} /> */}
        <Route path="/budget" component={Budget} />
        <Route path="/todo" component={Todo} />
        <Route path="/guests" component={GuestsList} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/schedule" component={Schedule} />

    </Switch>
  </main>
)

class App extends Component {

  state = { 
    visible: false,    
    collapsed: false,
    open: false,
  };


  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="App">
      <Layout>
        <header className="App-header"/>
        <Drawer
          variant="permanent"
          // className={classNames(classes.drawer, {
          //  'drawerOpen': this.state.open,
          //   'drawerClose': !this.state.open,
          // })}
          // classes={{
          //   paper: classNames({
          //     'drawerOpen': this.state.open,
          //    'drawerClose': !this.state.open,
          //   }),
          // }}
          open={this.state.open}
        >
          <div 
          // className={classes.toolbar}
          >
            <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
              {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button>
                <ListItemIcon><Icon type="schedule" /></ListItemIcon>
                <ListItemText><Link to="/schedule">
              <span>Расписание</span>
              </Link></ListItemText>
              </ListItem>


            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))} */}
          </List>
          {/* <Divider /> */}
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>


        {/* <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'left' : 'right'}
              onClick={this.toggle}
            />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
            <Link to="/schedule">
              <Icon type="schedule" />
              <span>Расписание</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/todo">
              <Icon type="bars" />
              <span>Спитсок дел</span>            
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="guests">
              <Icon type="team" />
              <span>Гости</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/budget">
              <Icon type="wallet" />
              <span>Бюджет</span>
            </Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/contacts">
              <Icon type="phone" />
              <span>Контакты</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider> */}
        <Layout>
        <Content>
          <Main/>
        </Content>
      </Layout>
     
        </Layout>
      </div>
    );
  }
}

export default App;
