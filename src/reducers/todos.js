
import TodoList from '../data/todo-list';

const todos = (state = TodoList, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    done: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            )
        default:
            return state
    }
}

export default todos