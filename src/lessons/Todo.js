import { useState } from "react";

const EachTodo = props => (
    <tr key={props.id}>
        <td><label htmlFor="">{props.id}</label></td>
        <td> <input type="text" /> </td>
        <td><label htmlFor="">{props.createdAt}</label></td>
    </tr>

)


const Todo = () => {
    const [todos, setTodos] = useState(
        [{
            id: "todo1",
            createdAt: "18:30"
        }, {
            id: "todo2",
            createdAt: "20:30"
        }]
    )

    const reverseOrder = () => {
        // reverse is a mutative operation(directly performs its operation on the state) 
        // and this is not allowed in react
        // we need to create a new array first
        setTodos([...todos].reverse())
    }
    return (
        <div>
            <button onClick={reverseOrder}> Reverse</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) => (
                            <EachTodo  key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Todo;