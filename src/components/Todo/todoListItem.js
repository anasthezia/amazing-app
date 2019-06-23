import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const TodoListItem = ({ onClick, done, content, date }) => (
    <ListItem button
        onClick={onClick}
        style={{
            textDecoration: done ? 'line-through' : 'none'
        }}
    >
        <ListItemText primary={content} secondary={date} />
            <ListItemSecondaryAction>
                <Checkbox
                    checked={done}
                />
            </ListItemSecondaryAction>
    </ListItem>
)

export default TodoListItem;