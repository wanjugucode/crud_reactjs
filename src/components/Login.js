import {useForm} from 'react-hook-form';
export const Login =()=>{
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
    return(
        <div>

            <form id="form" onSubmit={handleSubmit(onSubmit)}>

            <h1 id="heading">Login form</h1>
            <span>
            <label for='email'>Email</label>
            <input type="text"{...register("email",{required:true,pattern: /^\S+@\S+$/i })} placeholder="Enter your email.." id="email"></input>
            {errors.email?.type==="require" && "Email is required"}
            {errors.email && <span className="error">Invalid email address</span>}


            </span>
            <br/>
            <span>
            <label for='password'>Password</label>
            <input type="text"{...register("password",{required:true, maxLength:10})} placeholder="Enter your password.." id="password"></input>
            {errors.passwprd?.type==="required" && "Password is required"}
            {errors.password && (
          <span className="error">
            Password should be at least 8 characters long
          </span>
        )}
            </span>
            <br/>

            <button>Login</button>
            <p>Don't have an account? <a href="/home">Register</a></p>
            <p>Forgot password? <a href="/home">Reset</a></p>

            </form>
        </div>
    )
}