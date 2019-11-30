import React from 'react'
import Container from '@material-ui/core/Container'
import Footer from './Footer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Todo = () => (
<Container maxWidth="md">
    <AddTodo />
    <TodoList />
    <Footer />
  </Container>
)

export default Todo