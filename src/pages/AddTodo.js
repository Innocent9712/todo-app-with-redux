import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addTodo } from '../redux/actions/todoActions'

export const AddTodo = ({props, addTodo, state, todos}) => {
    console.log(todos)
    console.log(state)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        id: Date.now(),
        todo: ""
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

    return (
        <div>
            <h3>Todo</h3>
            <form onSubmit={handleSubmit}>
                <label>Todo</label>
                <input type='text' name='todo' placeholder='Todo' value={form.todo} onChange={handleChange}/>
                <button type="submit">add</button>
            </form>
            <Link to="/todos">
            <button>cancel</button>
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
