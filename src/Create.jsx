import React, { useState } from "react";
import { Link } from 'react-router-dom'
export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mob, setMob] = useState('')
    const [password, setPassword] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault()
        let userData = JSON.parse(window.localStorage.getItem('user')) || []
        let emails = [...userData.map((data, index) => {
            return data.email
        })]
        let ids = [...userData.map((data) => {
            return data.id
        })]


        let flag = 1
        emails.map((data) => {
            if (data == email) {
                return flag = 0
            } else {
                return flag = 1
            }
        })

        let id = 1
        if (flag) {
            if (ids.length == 0) {
                let newUser = { id, name, email, mob, password }
                userData.push(newUser)
                window.localStorage.setItem('user', JSON.stringify(userData))
                console.log(id)
            } else {
                let len = ids.length - 1
                id = ids[len] + 1
                let newUser = { id, name, email, mob, password }
                userData.push(newUser)
                window.localStorage.setItem('user', JSON.stringify(userData))
            }
        } else {
            alert("this email are already registerd")
        }

        setName('')
        setEmail('')
        setMob('')
        setPassword('')

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
                                <h1 className="text-center text-success">Create user</h1>
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
                                    <input type="submit" value="Save" className="btn btn-outline-success" />
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