import React, { Component } from 'react';
import { Route, Link, Switch,} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import "antd/dist/antd.css";
import './App.css';

import Budget from './components/Budget';
import Todo from './components/Todo';
import GuestsList from './components/GuestsList';
import Contacts from './components/Contacts';
import Schedule from './components/Schedule';

const { Header, Sider, Content } = Layout;
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
        <header className="App-header">
        </header>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
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
        </Sider>
        <Main/>
        </Layout>
      </div>
    );
  }
}

export default App;
