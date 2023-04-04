import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
    const navigate = useNavigate()
    const { index } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mob, setMob] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        let alldata = JSON.parse(window.localStorage.getItem('user')) || []
        setData(alldata)
        setName(alldata[index].name)
        setEmail(alldata[index].email)
        setPassword(alldata[index].password)
        setMob(alldata[index].mob)
    }, [])
    let handleSubmit = (e) => {
        e.preventDefault()
        data[index].name = name
        data[index].email = email
        data[index].mob = mob
        data[index].password = password
        window.localStorage.setItem('user', JSON.stringify(data))
        navigate('/show')

    }
    // console.log(data)
    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-title pt-2 ">
                                <h1 className="text-center text-success">Update user</h1>
                                <Link to='/show'>
                                    <div className="btn btn-outline-primary ms-3">Show Details</div>
                                </Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <label>Name : </label>
                                    <input type="text" value={name} placeholder="Enter Your Name..." className="form-control" required onChange={(e) => { setName(e.target.value) }} />
                                    <label>Email : </label>
                                    <input type="email" value={email} placeholder="Enter Your Email..." className="form-control" required onChange={(e) => { setEmail(e.target.value) }} />
                                    <label>Number : </label>
                                    <input type="number" value={mob} placeholder="Enter Your Mob no..." className="form-control" required onChange={(e) => { setMob(e.target.value) }} />
                                    <label>Password : </label>
                                    <input type="password" placeholder="Enter Your password..." className="form-control" value={password} required onChange={(e) => { setPassword(e.target.value) }} />
                                    <br />
                                    <input type="submit" value="Update" className="btn btn-outline-success" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </>
    )
}