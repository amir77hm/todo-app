import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';


export default function TodoList({ todos, removeTodo, toggleTodo, updateTodo }) {

    if (todos.length) {
        return (
            <Paper style={{ marginTop: '2rem', padding: '.5rem' }}>
                <List>
                    {todos.map((todo, i) =>
                        <div key={todo.id}>
                            <Todo
                                key={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                id={todo.id}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                updateTodo={updateTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </div>
                    )}
                </List>
            </Paper>
        )
    } else { return null }
}
