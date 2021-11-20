import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { signUpAction } from '../redux/actions/signUpAction'
import {Link, useNavigate} from "react-router-dom"

function SignUp(props) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [signUpStatus, setSignUpStatus] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userDetailState = useSelector(state => state.auth.userDetails)
    const state = useSelector(state => state)
    console.log(state);
    console.log(userDetailState)

    useEffect(() => {
        signUpStatus && navigate("/login")

    }, )
           
    const handleChange = (e) => {
        const value = e.target.value
        setUserDetails((prevState)=>({
            ...prevState, [e.target.name] : value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userDetails.username && userDetails.password) {
            if (userDetailState && userDetailState === userDetails) {
                alert("User already exists!")
            } else {
                dispatch(signUpAction(userDetails))  
                setSignUpStatus(true)
                console.log("Sign up successful!", userDetails)
            }
        } else {
            alert("Please check username and password.")
        }
    }

    const handleShow = (e) => {
        e.preventDefault()
        showPassword?setShowPassword(false):setShowPassword(true)
    }

    return (
        <div>
            <h3 className="header">SignUp</h3>
            <form onSubmit={handleSubmit} >
                <label>Username</label><br/>
                <input type='text' name='username' placeholder="username" value={userDetails.username} onChange={handleChange} /><br/>
                <label>Password</label>
                <div className="password-container">
                    <input type={showPassword?"text":"password"} name='password' placeholder='password'  value={userDetails.password} onChange={handleChange} />
                    <button onClick={handleShow}>{showPassword? "hide password": "show password"}</button>
                </div>
                <button className="submit" type="submit" >Sign up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default SignUp
