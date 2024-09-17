import React, { useContext } from 'react'
import Navber from '../Shared/Navbar/Navber';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
  const { logIn} = useContext(AuthContext) ;
  const navigate = useNavigate() ;
  const handlelogin = (e) =>{
     e.preventDefault() ;
     const email = e.target.email.value ;
     const password = e.target.password.value ;
     console.log(email , password) ;
      logIn(email , password)
      .then(result =>{
        console.log(result.user)
       // e.target.reset() ;
         navigate("/") ;
      })
      .catch(error =>{
        console.log(error) 
      })

  }
    return (
       <div>
         <Navber></Navber>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" 
           name='email'

          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
               name='password'
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <p>Do not have an account ? pleace <Link 
      className='text-blue-400'
      to='/register'>Register</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
    </div>
  </div>
</div>
       </div>
    );
};

export default Login;