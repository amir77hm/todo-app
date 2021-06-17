import React, { useEffect } from 'react'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import UseTodoState from "./Hooks/UseTodoState";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function TodoApp() {
    const classes = useStyles();

    const {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        updateTodo } = UseTodoState([])


    return (
        <Paper height='100vh' elevation={0}>
            <AppBar color='primary' height='64px' position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center'>
                <Grid item xs={11} sm={7} md={5} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        updateTodo={updateTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
