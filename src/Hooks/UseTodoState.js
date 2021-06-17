import UseLocalStorageState from './UseLocalStorageState';
import { v4 as uuidv4 } from 'uuid';
const TodoState = initialTodo => {
    const [todos, setTodos] = UseLocalStorageState('todos', initialTodo)

    console.log(todos)

    return {
        todos,
        addTodo: (task) => {
            const newTodo = {
                id: uuidv4(),
                task: task,
                completed: false
            }
            setTodos([...todos, newTodo])
        },
        removeTodo: (id) => {
            const updatedTodo = todos.filter(todo => todo.id !== id)
            setTodos(updatedTodo)
        },
        toggleTodo: todoId => {
            const updatedTodo = todos.map(todo => todo.id === todoId ?
                { ...todo, completed: !todo.completed } : todo)
            setTodos(updatedTodo)
        },
        updateTodo: (todoId, newTodo) => {
            const newdTodo = todos.map(todo => todo.id === todoId ? { ...todo, task: newTodo } : todo)
            setTodos(newdTodo)
        }
    }
}
export default TodoState;