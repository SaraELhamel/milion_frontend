import { Link ,useHistory} from "react-router-dom";
import {useForm} from 'react-hook-form'


import axios from 'axios'



export default function Group () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post(process.env.REACT_APP_URL+'groupe/addgroup',data)
         .then(response=>{
            
            console.log(response)
            history.push('/game')
            })
        .catch(err=>console.log(err))
    }
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>add group</h3>

                <div className="form-group">
                    <label>id participant</label>
                    <input type="id" className="form-control" name="id_participant" placeholder="Enter participant" ref={register} />
                </div>

                <div className="form-group">
                    <label>groupe code</label>
                    <input type="number" className="form-control"  name="group_code" placeholder="Enter code" ref={register} />
                </div>

                

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                 
                
               
            </form>
        );
    }