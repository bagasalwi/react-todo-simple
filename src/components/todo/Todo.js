import './todo.css';
import TodoList from "../todo-list/Todo-list";
import TodoCreate from "../todo-create/todo-create";
import { useState } from 'react';

const Todo = () => {

    const [getTodos, setTodos] = useState(
        [
            {id : 1, title : 'GoLang'},
            {id : 2, title : 'React'},
            {id : 3, title : 'Vue'},
        ]
    );

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
        console.log(getTodos)
    }

    return (
        <div>
            <h3>To do list</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos}/>
        </div>
    )
}

export default Todo;