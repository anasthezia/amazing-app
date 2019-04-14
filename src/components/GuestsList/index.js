import React from 'react';
import {List, Avatar, Icon } from 'antd';
import Guests from '../../data/guests';

class GuestsList extends React.Component {
  render() {
    return (
      <div>
      <h2>Список гостей</h2>
      <List
        itemLayout="horizontal"
        dataSource={Guests}
        renderItem={item => (
          <List.Item classname="guest">
            <List.Item.Meta
              avatar={ <Avatar shape="circle" size={64} src={`/assets/images/fakedata/${item.userpic_URL}`}  />}
              title={item.name}
              description={item.post}
            />
            <div classsname="guest__contacts">
              <div>{item.phone}</div> 
              <div>{item.username}</div>
            </div>
            <div classname="guest__checkin">
              {item.checked_in === true &&
                <Icon type="check-circle" />
                ||
                item.checked_in === false && 
                <Icon type="close-circle"/>
              }
              { item.checked_in === true && item.additional >0 &&
                <div classname="guwst__checked-count">{item.additional}</div>
              }
            </div>  
          </List.Item>
        )}
        />,
      </div> 
    ) 
  }
}
export default GuestsList