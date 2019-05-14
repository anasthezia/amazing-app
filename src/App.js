import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

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

import Home from './components/Home';
import Budget from './components/Budget';
import Todo from './components/Todo';
import GuestsList from './components/GuestsList';
import Contacts from './components/Contacts';
import Schedule from './components/Schedule';
import SideMenu from './components/SideMenu';


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


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
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
          <SideMenu />
          <Main className="content" />
      </div>
    );
  }
}

export default App;
