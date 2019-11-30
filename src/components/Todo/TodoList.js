import React from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'

import TodoListItem from './todoListItem'
import {VisibilityFilters, toggleTodo} from '../../actions'



// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case VisibilityFilters.SHOW_ALL:
//             return todos
//         case VisibilityFilters.SHOW_COMPLETED:
//             return todos.filter(t => t.done)
//         case VisibilityFilters.SHOW_ACTIVE:
//             return todos.filter(t => !t.done)
//         default:
//             throw new Error('Unknown filter: ' + filter)
//     }
// }


const TodoList = ({ todos, toggleTodo }) => (
    <List dense className="list-item">
                {todos.filter(t => !t.done).map(todo =>
            <TodoListItem
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />

            )}
            <div>Показать все</div>
        {todos.filter(t => t.done).map(todo =>
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

// export default TodoList

const mapStateToProps = state => ({
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)