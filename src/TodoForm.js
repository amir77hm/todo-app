import React from 'react'
import UseInputState from "./Hooks/UseInputState";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


export default function TodoForm(props) {

    const [value, handleChange, reset] = UseInputState('')

    return (
        <Paper style={{ margin: '2rem 0', padding: '1rem', paddingTop: '3px' }}>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.addTodo(value)
                reset()
            }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin='normal'
                    label='add new todo'
                    fullWidth
                />
            </form>
        </Paper>
    )
}
