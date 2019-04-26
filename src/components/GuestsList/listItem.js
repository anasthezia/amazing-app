import React from 'react';
import {Avatar, Icon, Row, Col  } from 'antd';



class GuestsListImem extends React.Component {
  render() {
    const {item} = this.props;

    return (
  <li className="guest">
  <Avatar shape="circle" classname="guest__image" size={64} src={`/assets/images/fakedata/${item.userpic_URL}`}  /> 
  <div className="guest__data"> 
<div className="guest__name">
  {item.name}
</div>
  <div className="guest__post">
    {item.post}
  </div>
  </div>
  <div className="guest__contacts">
              <div>{item.phone}</div>   
              <div>{item.username}</div>
            </div>
            <div className="guest__checkin"> 
              {(item.checked_in === true &&  
              <Icon type="check-circle" /> )
                ||
                (item.checked_in === false && 
                <Icon type="close-circle"/>)
              }
              { item.checked_in === true && item.additional >0 &&
                <div className="guwst__checked-count">{item.additional}</div>
              }
            </div> 
</li>)
  }
}
export default GuestsListImem