import './Todo-list.css';

const TodoList = (props) => {
        console.log(props);

    return (
        <ul>
            {
                // props.data-todos.forEach(element => {
                
                // });

                props.dataTodos.map((todo)=>{
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList;