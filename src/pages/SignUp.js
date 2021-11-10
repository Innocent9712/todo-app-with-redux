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

    return (
        <div>
            <h3>SignUp</h3>
            <form onSubmit={handleSubmit} >
                <label>Username</label>
                <input type='text' name='username' value={userDetails.username} onChange={handleChange} />
                <label>Password</label>
                <div>
                    <input type={showPassword?"text":"password"} name='password' value={userDetails.password} onChange={handleChange} />
                    <p onClick={()=> setShowPassword(true?false:true)}>{showPassword? "hide password": "show password"}</p>
                </div>
                <button type="submit" >Sign up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default SignUp
