import React from 'react'

export default function AdminList(props) {
    const {data} = props
    return (
        <tbody>
            <tr>
                        <td scope="row">{data.full_name}</td>
                        <td>{data.phone}</td>
                        <td>{data.password}</td>
                        {/* <td><button className="btn btn-success" onClick={()=>validAccount(data._id)}>validate</button></td> */}
                    </tr>
        </tbody>
    )
}
