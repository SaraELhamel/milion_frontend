import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'



export default function SignUp () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post(process.env.REACT_APP_URL+'participant/addpartic',data)
         .then(response=>{
            
            console.log(response)
            history.push('/sign-in')
            })
        .catch(err=>console.log(err))
    }
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" name="full_name" placeholder="Full name" ref={register}/>
                </div>

                <div className="form-group">
                    <label>phone</label>
                    <input type="number" name="phone" className="form-control" placeholder="Phone" ref={register}/>
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input type="number" name="age"  className="form-control" placeholder="Enter age" ref={register}/>
                </div>
                
                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered  <Link to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
        );
    // }
}