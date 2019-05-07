import React from 'react'
import { Calendar, Table,  Icon, Row, Col} from 'antd';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TodoList from '../../data/todo-list';
import TodoForm from './addTodoForm';
import './style.scss';


function getListData(value) {
  const listData = TodoList.filter(item => item.date === (value.format("MMM Do YY")));
  return listData || [];
}

function dateCellRender(value, TodoList ) {
  const listData = getListData(value, TodoList);
  return (
    <ul className="calendar__events-list">
      {
        listData.map(item => (
          <li key={item.id} className="calendar__events-list-item">
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
}
// {
//   title: 'Action',
//   key: 'action',
//   render: (text, record) => (
//     <span>
//       <a href="javascript:;">Invite {record.name}</a>
//       <Divider type="vertical" />
//       <a href="javascript:;">Delete</a>
//     </span>
//   ),
// }
];

class Todo extends React.Component {
  state = { visibleDriver1: false,  visibleDriver2: false};

  showDrawer1 = () => {
    this.setState({
      visibleDriver1: true,
    });
    console.log('................', this.state)
  };
  closeDriver1 = () => {
    this.setState({
      visibleDriver1: false,
    });
    console.log('................', this.state)
  };
   
  showDrawer2 = () => {
    this.setState({
      visibleDriver2: true,
    });
    console.log('................', this.state)
  };
  closeDriver2 = () => {
    this.setState({
      visibleDriver2: false,
    });
    console.log('................', this.state)
  };
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={18} className="todo-list">
              <Fab className="todo-list__add-new-btn" color="secondary" aria-label="Add"  onClick={this.showDrawer2}>
                <i className="material-icons">    
                  add
                </i>              
              </Fab>
              <Button variant="contained" color="primary"  onClick={this.showDrawer1} >
                <i className="material-icons">
                  calendar_today
                </i>
                Показать календарь
              </Button>
              <Table 
                columns={columns} 
                dataSource={TodoList} 
                rowClassName={(record, index) => ((record.done === true) && 'todo-row--done')}      
              />
              <Drawer
                anchor="right"
                className="calendarDrawer"
                open={this.state.visibleDriver1}
              >
            <div
            className="calendarDrawer__close-btn"
            tabIndex={0}
            role="button"
            onClick={this.closeDriver1}
          >             
          <div
            className="calendarDrawer__close-btn"
            tabIndex={0}
            role="button"
            onClick={this.closeDriver1}
          >  
            <i className="material-icons">
                arrow_forward
            </i>
          </div>
        </div>
          <Calendar 
            dateCellRender={dateCellRender} 
            monthCellRender={monthCellRender} 
          /> 
        </Drawer>
        <Drawer
          anchor="right"
          className="formDrawer"
          open={this.state.visibleDriver2}
        >
          <div
            className="calendarDrawer__close-btn"
            tabIndex={0}
            role="button"
            onClick={this.closeDriver2}
          >             
          <i className="material-icons">
              arrow_forward
          </i>
      </div>
      <TodoForm/>
    </Drawer>
  </Col>
</Row>
    )  
  }
}
export default Todo