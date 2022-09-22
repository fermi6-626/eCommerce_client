import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import signupLogo from "../assets/login.png";

export const Signup = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPasswd] = useState('');
    const [confimPasswd, setConfirmPasswd] = useState('');
    const [redirect, setRedirect] = useState(false)
    const signup = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/signup', {
            first_name: firstName,
            last_name: lastName,
            email,
            username,
            password,
            confirm_pass: confimPasswd
        });
        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login" />
    }


    return <main className="form-signin w-100 m-auto">
        <form onSubmit={signup}>
            <img className="mb-4" src={signupLogo} alt="" width="80" height="80" style={{
                display: 'block',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
            }} />
            <h1 className="h3 mb-3 fw-normal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sign Up</h1>

            <div className="form-floating">
                <input className="form-control" id="floatingInput"
                    placeholder="First name"
                    onChange={e => setFirstname(e.target.value)} />
                <label htmlFor="floatingInput">First name</label>
            </div>

            <div className="form-floating">
                <input className="form-control" id="floatingInput"
                    placeholder="Last name"
                    onChange={e => setLastname(e.target.value)} />
                <label htmlFor="floatingInput">Last name</label>
            </div>

            <div className="form-floating">
                <input type="email" className="form-control"
                    id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input className="form-control" id="floatingInput"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)} />
                <label htmlFor="floatingInput">Username</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control"
                    id="floatingPassword" placeholder="Password"
                    onChange={e => setPasswd(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control"
                    id="floatingPassword" placeholder="Confirm password"
                    onChange={e => setConfirmPasswd(e.target.value)} />
                <label htmlFor="floatingPassword">Confirm password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </main>
}