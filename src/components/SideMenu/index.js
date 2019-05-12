import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss';

const MenuItems = [
    {
        title: 'Главная',
        link: '/',
        icon: <FontAwesomeIcon icon="home" />,
    },
    {
        title: 'План',
        link: '/schedule',
        icon: <FontAwesomeIcon icon="columns" />,
    },
    {
        title: 'Список дел',
        link: '/todo',
        icon: <FontAwesomeIcon icon="clipboard-list" />,
    },
    {
        title: 'Гости',
        link: '/guests',
        icon: <FontAwesomeIcon icon="tshirt" />,
    },
    {
        title: 'Бюджет',
        link: '/budget',
        icon: <FontAwesomeIcon icon="calculator" />,
    },
    {
        title: 'Контакты',
        link: '/contacts',
        icon: <FontAwesomeIcon icon="id-card" />,
    },
]


class SideMenu extends Component {
    state = {
        open: false,
    };

    handleDrawerToggle = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <Drawer
                variant="permanent"
                open={this.state.open}
                className={classNames('sideDrawer', {
                    'sideDrawer_open': this.state.open,
                    'sideDrawer_close': !this.state.open,
                })}
                classes={{
                    paper: classNames({
                        'sideDrawer_open': this.state.open,
                        'sideDrawer_close': !this.state.open,
                    }),
                }}
            >
                <div className="sideDrawer__header">
                    <IconButton onClick={this.handleDrawerToggle}>
                        {(this.state.open && <FontAwesomeIcon icon="chevron-left" />) || <FontAwesomeIcon icon="chevron-right" />}
                    </IconButton>
                </div>
                <Divider />
                <List className="main-menu">
                    {MenuItems.map((item, index) => (
                        <ListItem className="main-menu__item menu-item" button key={index}>
                            <Link to={item.link} className="menu-item__link">
                                <ListItemIcon className="menu-item__icon">{item.icon}</ListItemIcon>
                                <ListItemText className="menu-item__text">{item.title}</ListItemText>
                            </Link>
                        </ListItem>
                    ))
                    }
                </List>
            </Drawer>
        )
    }
}

export default SideMenu;
