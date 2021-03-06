import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';
import { loginAction } from '../redux/actions/loginAction'

export const Login = ({props,auth}) => {
    const navigate = useNavigate()

    useEffect(() => {
        userAuth && navigate("/todos")
    },)
    const [userAuth, setUserAuth] = useState(false)
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    
    const handleChange = (e) => {
        const value = e.target.value
        setUserDetails((prevState) => ({
            ...prevState, [e.target.name] : value
        }))
    }
    const handleShow = (e) => {
        e.preventDefault()
        showPassword?setShowPassword(false):setShowPassword(true)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userDetails && auth) {
            if (userDetails.username === auth.username && userDetails.password === auth.password) {
                setUserAuth(true)
            } else {
                alert("Invalid login details")
            }  
        } else {
            alert("user is not registered, please sign up.")
        }
    }
    return (
        <div>
            <h3 className="header">Login</h3>
            <form onSubmit={handleSubmit}>
                <label>Username</label><br/>
                <input type='text' name='username' placeholder="username" value={userDetails.username} onChange={handleChange} /><br/>
                <label>Password</label>
                <div className="password-container">
                    <input type={showPassword?"text":"password"} name='password' placeholder='password' value={userDetails.password} onChange={handleChange} />
                    <button onClick={handleShow}>{showPassword? "hide password": "show password"}</button>
                </div>
                <button className="submit" type="submit">Login</button>
            </form>
            <p>Don't have an account yet? <Link to={'/signup'}>Sign up</Link></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.userDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (payload) => {
            dispatch(loginAction(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
// export default Login;