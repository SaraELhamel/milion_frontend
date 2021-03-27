import {useForm} from 'react-hook-form'


import axios from 'axios'



export default function Game () {
   
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:3000/participant//game/:id',data)
         .then(response=>{
            
            console.log(response)
            })
        .catch(err=>console.log(err))
    }
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>game round</h3>

                <div className="form-group">
                    <label>id question</label>
                    <input type="id" className="form-control" name="id_question" placeholder="Enter question" ref={register} />
                </div>

                <div className="form-group">
                    <label>answer</label>
                    <input type="text" className="form-control"  name="answer" placeholder="Enter answer" ref={register} />
                </div>

                

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                 
                
               
            </form>
        );
    }