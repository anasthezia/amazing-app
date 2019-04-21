import React from 'react'
// import moment from 'moment';
import { Calendar, Table, Divider, Form, DatePicker, TimePicker, Button, Input} from 'antd';
import TodoList from '../../data/todo-list';

function getListData(value) {
  const listData = TodoList.filter(item => item.date === (value.format("MMM Do YY")));
  return listData || [];
}

function dateCellRender(value, TodoList ) {
  const listData = getListData(value, TodoList);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.id}>
            { item.content }
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {      
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}


const columns = [{
  title: 'Дата',
  dataIndex: 'date',
  key: 'date',
},  {
  title: 'Content',
  dataIndex: 'content',
  key: 'content',
}, 
{
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];


// const 


class Todo extends React.Component {
  handleSubmit = (e, values) => {
    e.preventDefault();
    console.log('Received values of form: ', values);
  }

  render() {

    return (

    <div> 
            <Form  layout='inline'
            onSubmit={this.handleSubmit}
            >
            <Form.Item
        >
           <DatePicker  format="DD-MM-YYYY" />
           </Form.Item>
          <Form.Item>
             <TimePicker />
          </Form.Item>
           <Form.Item
        >
          <Input  placeholder="Что нужно сделать" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Добавить
          </Button>
        </Form.Item>
</Form>
      {/* <div className="selectView">
      
      </div>  */}
      <Table 
      columns={columns} 
      dataSource={TodoList} 
      rowClassName={(record, index) => ((record.done === true) && 'todo-row--done')}      />

       <Calendar 
    dateCellRender={dateCellRender} 
    monthCellRender={monthCellRender} 
    /> 
      </div>
    )  
  }
}
export default Todo