import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Show() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        let alldata = JSON.parse(window.localStorage.getItem('user')) || []
        setData(alldata)
    }, [])
    let handleDelete = (index) => {
        if (window.confirm('do you want to remove user..')) {
            data.splice(index, 1)
            window.localStorage.setItem('user', JSON.stringify(data))
            window.location.reload()

        }
    }
    let handleEdit = (index) => {
        navigate('/edit/' + index)
    }
    return (
        <>
            <div className="container p-2">
                <Link to='/'>
                    <div className="btn btn-outline-success">Add More</div>
                </Link>
                <br />
                <table className="table table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>number</th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.mob}</td>
                                    <td>
                                        <div className="btn btn-outline-warning" onClick={() => { handleEdit(index) }}>Edit</div>
                                        <div className="btn btn-outline-danger ms-4" onClick={() => { handleDelete(index) }}>Delete</div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}