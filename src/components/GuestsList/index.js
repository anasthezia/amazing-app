import React from 'react';
import { Table, Divider, Avatar } from 'antd';
import Guests from '../../data/guests';

const columns = [{
  title: 'image',
  dataIndex: 'userpic_URL',
  key: 'userpic_URL',
  render: userpic_URL => <Avatar shape="circle" size={64} src={`/assets/images/fakedata/${userpic_URL}`}  />,

}, 
{
  title: 'Name',
  dataIndex: 'name',
  // key: 'name',
  render: name => <a href="javascript:;">{name}</a>,
  rowSpan: 3,
},
 {
  title: 'Телефон',
  dataIndex: 'phone',
  // key: 'phone',
}
];


class GuestsList extends React.Component {
  render() {
    return (
      <div>
    <h2>Список гостей</h2>
    <Table columns={columns} dataSource={Guests} />
      </div> 
    ) 
  }
}
export default GuestsList