import React from 'react';
import {List, Avatar } from 'antd';
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
      <List.Item>
        <List.Item.Meta
          avatar={ <Avatar shape="circle" size={64} src={`/assets/images/fakedata/${item.userpic_URL}`}  />}
          title={item.name}
          description={item.post}
        />
        <div>
          {item.phone}
          {item.username}
        </div>
      </List.Item>
    )}
  />,
      </div> 
    ) 
  }
}
export default GuestsList