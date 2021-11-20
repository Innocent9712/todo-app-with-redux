import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { removeTodo, todoStatus } from '../redux/actions/todoActions'

export const TodoList = ({todos, removeTodo, markTodo}) => {
    const handleDelete = (id) => {
        console.log(id)
        removeTodo(id)
    }

    const handleDone = (id) => {
        console.log(id)
        markTodo(id)
    }


    return (
        <div className="todo-list-container">
            <h3 className="header">Todos</h3>
            {todos && todos.length ? (
                <ul className="todo-list">{todos.map(item => {
                    return (
                        <li key = {item.id}>
                            <div className={`todo ${item.completed && "completed"}`}>
                                <p>{item.todo}</p>
                                <div className="todo-list-btn">
                                    <button onClick={()=>handleDone(item.id)}>{item.completed ? "completed" : "not completed"}</button>
                                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                                </div>
    
                            </div>
                        </li>
                    )
                })}</ul>

            ) : (
                <h3 className='empty-todo'>Nothing to display</h3>
            )}
            <Link to="/todo">
            <button className="link-to-todo">add todo</button>
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
    },
    markTodo : (payload) => {
        dispatch(todoStatus(payload))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
