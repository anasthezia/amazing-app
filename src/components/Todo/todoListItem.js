import React, { Component } from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class TodoListItem extends Component {
    render() {
        const { item, toggleTodo} = this.props

        return (
            < ListItem button onClick={() => toggleTodo(item.id)}>
                <ListItemText primary={item.content} secondary={item.date} />
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={item.done}
                    />
                </ListItemSecondaryAction>
            </ListItem >
        )
    }
}
export default TodoListItem;