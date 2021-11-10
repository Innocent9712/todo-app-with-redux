import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

export const TodoList = ({state, todoState, props}) => {
    // const todoList = state.todos
    const [todos, setTodos] = useState(todoState)
    console.log(todoState)
    console.log(state)
    // console.log(state.todoState.state.todos)
    // console.log(state.todoState.state.todos)

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => !todo.id))
    }
    // console.log(todos)
    // console.log(todoState)


    return (
        <div>
            <h3>Todos</h3>
            {todos ? (
                <ul>{todos.map(item => {
                    // console.log(item)
                    return (
                        <li key = {item.id}>
                            <div>
                                <h5>{item.todo}</h5>
                                <div>
                                    <button>done</button>
                                    <button onClick={handleDelete(item.id)}>delete</button>
                                </div>
    
                            </div>
                        </li>
                    )
                })}</ul>

            ) : (
                <h3>Nothing to display</h3>
            )}
            <Link to="/todo">
            <button>add todo</button>
            </Link>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
        state,
        todos: state.todos.todos
})

const mapDispatchToProps = (dispatch)=>({
    dispatch : () => {

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
