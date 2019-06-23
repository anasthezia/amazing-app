import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Calendar, Row, Col } from 'antd';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TodoList from '../../data/todo-list';
import { toggleTodo, VisibilityFilters } from '../../actions'
//import * as TodoActions from '../../actions'

import TodoForm from './addTodoForm';
import TodoListItem from './todoListItem';
import './style.scss';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';


function getListData(value) {
  const listData = TodoList.filter(item => item.date === (value.format("MMM Do YY")));
  return listData || [];
}



function dateCellRender(value, TodoList) {
  const listData = getListData(value, TodoList);
  return (
    <ul className="calendar__events-list">
      {
        listData.map(item => (
          <li key={item.id} className="calendar__events-list-item">
            {item.content}
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

  constructor(props) {
    super(props);
    this.state = {
      todos: TodoList

    }
  }
  toggleTodo(id) {
    console.log('.......................', id)
    this.props.toggleTodo(id)
  }
  render() {
    const props = this.props;
    // const { store } = this.context;
    // const state = store.getState();
    return (
      <Row type="flex" justify="center">
        <Col span={18} className="todo-list">

          <Fab className="todo-list__add-new-btn" color="secondary" aria-label="Add" onClick={this.showDrawer2}>
            <i className="material-icons">
              add
                       </i>
          </Fab>
          <Button variant="contained" color="primary" onClick={this.showDrawer1} >
            <i className="material-icons">
              calendar_today
                       </i>
            Показать календарь
                     </Button>

          <List dense className="list-item">
            {this.state.todos.map((item, index, acrions) => (
              <TodoListItem

                key={item.id} item={item} />
            ))}
          </List>
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
            <TodoForm />
          </Drawer>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: TodoList,
  testStore: state
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
//  actions: bindActionCreators(TodoActions, dispatch)

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)
