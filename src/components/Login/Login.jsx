import './Login.scss'
import { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();

        const requestBody = {
            username,
            password
        }

        axiosInstance().post('/login', requestBody)
            .then((res) => {
                console.log(res.data)
                const officerToken = res.data.token;
                localStorage.setItem('officerToken', officerToken)
                localStorage.setItem('isAdmin', res.data.data.isAdmin)
                localStorage.setItem('officerName', res.data.data.name)

                toast.success('Logged in successfully!', {
                    duration: 2000,
                    position: 'bottom-right'
                })

                setTimeout(() => {
                    setUsername('')
                    setPassword('')
                    navigate('/')
                    window.location.reload()
                }, 1000)
            }).catch((err) => {
                console.log(err)
                toast.error('Invalid Credentials!', {
                    duration: 2000,
                    position: 'bottom-right'
                })
            })
    }

    return (
        <>
            <div className="loginContainer">
                <h1>LOGIN</h1>
                <form className='login-form'>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" onChange={(e) => { setUsername(e.target.value) }} value={username} />
                    </div>

                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>

                    <div>
                        <button className='login-btn' type="submit" onClick={loginUser}>Login</button>
                    </div>
                </form>
            </div>
            <Toaster />
        </>
    )
}

export default Login;