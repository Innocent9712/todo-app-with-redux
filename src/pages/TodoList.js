import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { removeTodo } from '../redux/actions/todoActions'

export const TodoList = ({todos, removeTodo}) => {
    const handleDelete = (id) => {
        console.log(id)
        removeTodo(id)
    }


    return (
        <div>
            <h3>Todos</h3>
            {todos && todos !== [] ? (
                <ul>{todos.map(item => {
                    return (
                        <li key = {item.id}>
                            <div>
                                <h5>{item.todo}</h5>
                                <div>
                                    <button>done</button>
                                    <button onClick={()=>handleDelete(item.id)}>delete</button>
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
        todos: state.todos
})

const mapDispatchToProps = (dispatch)=>({
    removeTodo : (payload) => {
        dispatch(removeTodo(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
