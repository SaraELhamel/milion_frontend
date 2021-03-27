import React from 'react'

export default function ParticipantList(props) {
    const {data} = props
    return (
        <tbody>
            <tr>
                        <td scope="row">{data.full_name}</td>
                        <td>{data.phone}</td>
                        <td>{data.age}</td>
                        <td>{data.password}</td>
                        
                    </tr>
        </tbody>
    )
}
