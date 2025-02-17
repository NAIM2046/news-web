import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navber from '../Shared/Navbar/Navber';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
       const {createUser} = useContext(AuthContext) ;
       const navigate = useNavigate() ;
    const handleRegister = (e) =>{
        e.preventDefault() ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const name = e.target.name.value ;
        const photo =  e.target.photo.value ;
        console.log(email , password , name) ;
         
        createUser(email , password)
        .then(result => {
          
          console.log(result.user)
          navigate("/") ;
        })
        .catch(error =>{
          console.error(error)
        })
   
     }
    return (
       <div>
        <Navber></Navber>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name : </span>
          </label>
          <input type="text" 
           name='name'

          placeholder="Name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url : </span>
          </label>
          <input type="text" 
           name='photo'

          placeholder="Photo Url" className="input input-bordered" required />
        </div>


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
          <p>Already have an account ? pleace <Link className='text-blue-500' to='/login'>Login</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
       </div>
    );
};

export default Register;