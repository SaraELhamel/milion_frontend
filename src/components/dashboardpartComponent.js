import React from 'react'
import axios from 'axios'
import ParticipantList from './participantList'
import { Link } from "react-router-dom";

import '../App.css';


export default function Dashboard1() {
    
   
    const [data,setData] = React.useState([])
    React.useEffect(async() => {
        const res = await axios.get(process.env.REACT_APP_URL+'participant/all')
        setData(res.data)
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
           
        <h3>Participant Dashboard</h3>
            <table class="table">
                <tr>
                <th>Full name</th>
                <th>phone</th>
                <th>age</th>
                <th>password</th>
                </tr>
                {data.map((part) => (
                        <ParticipantList data={part} key={part._id} />
                    ))}
               
                
            </table>   
          
            <Link to={"/dashboard"}>main dashboard</Link>
           
        </div>
      
    );
  }
 