import React from 'react'
// import moment from 'moment';
import { Calendar} from 'antd';
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




class Todo extends React.Component {
  render() {
    return   <Calendar 
    dateCellRender={dateCellRender} 
    monthCellRender={monthCellRender} 
    />
  }
}
export default Todo