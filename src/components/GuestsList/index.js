import React from 'react';
import {Avatar, Icon, Row, Col  } from 'antd';
import Guests from '../../data/guests';
import GuestsListImem from './listItem'
import './style.scss';

class GuestsList extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
        <h2>Список гостей</h2>
        </Row>
        <Row type="flex" justify="center">
          <Col span={18}>
            <ul className="guests-list">
              {Guests.map(item => <GuestsListImem  item={item} key={item.id}/>)}
            </ul>
          </Col>
        </Row>
      </div> 
    ) 
  }
}
export default GuestsList