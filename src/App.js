import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
//import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faClipboardList,
  faCalculator, 
  faColumns,
  faTshirt, 
  faIdCard,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'


import "antd/dist/antd.css";
import './App.scss';

import Budget from './components/Budget';
import Todo from './components/Todo';
import GuestsList from './components/GuestsList';
import Contacts from './components/Contacts';
import Schedule from './components/Schedule';
import SideMenu from './components/SideMenu';

//import Item from 'antd/lib/list/Item';

library.add(
  faHome, 
  faClipboardList,
  faCalculator,
  faTshirt,
  faColumns, 
  faIdCard,
  faChevronLeft,
  faChevronRight
)
// const { Sider } = Layout;
const { Sider, Content } = Layout;
//const drawerWidth = 240;  


const Main = () => (
  <main>
    <Switch>
      {/* <Route path="/" component={Schedule} /> */}
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

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <SideMenu />
        <Main />
      </div>
    );
  }
}

export default App;
