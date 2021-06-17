import React from 'react'
import UseToggleState from "./Hooks/UseToggleState";
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import EditTodoForm from "./EditTodoForm";


export default function Todo({ task, id, completed, removeTodo, toggleTodo, updateTodo }) {
    const [isEditing, toggle] = UseToggleState()
    return (
        <ListItem
            style={{
                height: '64px',
            }}
        >
            {isEditing ?
                <EditTodoForm
                    updateTodo={updateTodo}
                    id={id}
                    task={task}
                    toggle={toggle}
                    style={{
                        height: '60px',
                    }}
                /> :
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <ListItemText
                        style={{ textDecoration: completed ? 'line-through' : 'none' }}
                        onClick={() => toggleTodo(id)}
                    >{task}</ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeTodo(id)}>
                            <DeleteIcon fontSize='small' />
                        </IconButton>
                        <IconButton onClick={() => toggle()}>
                            <EditIcon fontSize='small' />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
            <Divider />
        </ListItem>

    )
}
