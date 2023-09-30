import './ALogin.scss'
const ALogin = () => {
    return (
        <>
            <div className="loginPage">
                <div className="loginContainer">
                    <h1>Admin LOGIN</h1>
                    <form >
                        <div className='Name'>
                            <h3>Enter Name</h3>
                            <input type='text' />
                        </div>
                        <div className='Password'>
                            <h3>Enter Password</h3>
                            <input type='text' />
                        </div>
                        <div className='sub'>
                            <input type='submit' />
                            <span><a href='#'>Forgot Password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ALogin;