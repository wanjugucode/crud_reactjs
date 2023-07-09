
export const Login =()=>{

    return(
        <div>

            <form id="form">

            <h1 id="heading">Login form</h1>
            <span>
            <label for='email'>Email</label>
            <input type="text" placeholder="Enter your email.." id="email"></input>
            </span>
            <br/>
            <span>
            <label for='password'>Password</label>
            <input type="text" placeholder="Enter your password.." id="password"></input>
            </span>
            <br/>

            <button>Login</button>
            <p>Don't have an account? <a href="/home">Register</a></p>
            <p>Forgot password? <a href="/home">Reset</a></p>

            </form>
        </div>
    )
}