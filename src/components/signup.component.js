import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link } from "react-router-dom";
import axios from 'axios'



export default function SignUp () {
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        // console.log(data);
         axios.post('http://localhost:3000/participant/addpartic',data)
         .then(response=>{
            
            console.log(response)
            })
        .catch(err=>console.log(err))
    }
    // render() {
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