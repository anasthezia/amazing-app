import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
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
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


import "antd/dist/antd.css";
import './App.scss';

import Budget from './components/Budget';
import Todo from './components/Todo';
import GuestsList from './components/GuestsList';
import Contacts from './components/Contacts';
import Schedule from './components/Schedule';
import Item from 'antd/lib/list/Item';

library.add(faStroopwafel)
// const { Sider } = Layout;
const { Sider, Content } = Layout;
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


const MenuItems = [
  {
    title: 'План',
    link: '/schedule',
    icon: <FontAwesomeIcon icon="stroopwafel" />,
  },
  {
    title: 'Список дел',
    link: '/todo',
    icon: <Icon type="bars" />,
  },
  {
    title: 'Гости',
    link: '/guests',
    icon: <Icon type="team" />,
  },
  {
    title: 'Бюджет',
    link: '/budget',
    icon: <Icon type="wallet" />,
  },
  {
    title: 'Контакты',
    link: '/contacts',
    icon: <Icon type="phone" />,
  },
]
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
          <header className="App-header" />
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
              {
                MenuItems.map((item, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText><Link to={item.link}>
                      <span>{item.title}</span>
                    </Link></ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Drawer>
          <Layout>
            <Content>
              <Main />
            </Content>
          </Layout>

        </Layout>
      </div>
    );
  }
}

export default App;
