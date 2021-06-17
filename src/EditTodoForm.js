import React from 'react'
import UseInputState from "./Hooks/UseInputState";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


export default function EditTodoForm({ task, id, updateTodo, toggle }) {

    const [value, handleChange] = UseInputState(task)

    return (
        <Paper elevation={0}
            style={{
                height: '50px',
            }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    updateTodo(id, value)
                    toggle()
                }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    // margin='normal'
                    label='Edit todo'
                    autoFocus
                />
            </form>
        </Paper>
    )
}
