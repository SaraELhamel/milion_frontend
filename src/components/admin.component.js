import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link } from "react-router-dom";

import axios from 'axios'



export default function Login () {
   
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:3000/admin/signinadmin',data)
         .then(response=>{
            
            console.log(response)
            })
        .catch(err=>console.log(err))
    }
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign In admin</h3>

                <div className="form-group">
                    <label>phone</label>
                    <input type="number" className="form-control" name="phone" placeholder="Enter phone" ref={register} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  name="password" placeholder="Enter password" ref={register} />
                </div>

                

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                 
                
               
            </form>
        );
    }