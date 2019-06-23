import React from 'react'
// import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import TodoListItem from './todoListItem'

const TodoList = ({ todos, toggleTodo }) => (
    <List dense className="list-item">
        {todos.map(todo =>
            <TodoListItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        )}
    </List>
)

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default TodoList