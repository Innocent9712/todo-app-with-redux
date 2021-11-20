import React, {useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addTodo } from '../redux/actions/todoActions'

export const AddTodo = ({addTodo, state, todos}) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        id: Date.now(),
        todo: "",
        completed: false
    })

    const handleChange = (e) => {
        const value = e.target.value
        setForm((prevState)=>({
            ...prevState, [e.target.name] : value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        form.todo &&
        setForm((prevState)=> ({
            ...prevState
        }))
        console.log(form)
        addTodo(form)
        navigate('/todos')
    }

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className="todo-input">
            <h3 className="header">Todo</h3>
            <form onSubmit={handleSubmit}>
                <label>Todo Text Here</label>
                <div className="todo-input-container">
                    <input type='text' name='todo' placeholder='Todo' value={form.todo} onChange={handleChange} ref={inputRef}/>
                    <button className="submit" type="submit">add</button>
                </div>
            </form>
            <Link to="/todos">
            <button className="link-to-todo">cancel</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state,
    todos : state.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (payload)=> dispatch(addTodo(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
