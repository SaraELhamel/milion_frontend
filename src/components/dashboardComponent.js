import React from 'react'
import axios from 'axios'
import AdminList from './adminList'
import { Link } from "react-router-dom";

import '../App.css';


export default function Dashboard() {
    
   console.log(process.env.REACT_APP_URL)
    const [data,setData] = React.useState([])
    React.useEffect(async() => {
        const res = await axios.get(process.env.REACT_APP_URL+'admin/alladmin')
        setData(res.data)
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
           

            <table class="table">
                <tr>
                <th>Full name</th>
                <th>phone</th>
                <th>password</th>
                </tr>
                {data.map((admin) => (
                        <AdminList data={admin} key={admin._id} />
                    ))}
               
                
            </table>   
            <Link to={"/dashboardpart"}> participant dashboard</Link>
        </div>
      
    );
  }
 

   
               
                
           
                  
       