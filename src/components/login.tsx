import axios from "axios";
import { SyntheticEvent, useState } from "react"
import { Navigate } from "react-router-dom";
import loginLogo from "../assets/login.png";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasswd] = useState('');
    const [username, setUname] = useState('');
    const [redirect, setRedirect] = useState(false);
    const signin = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await axios.post('http://127.0.0.1:8000/login', {
            email,
            username,
            password
        }, { withCredentials: true });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/" />
    }

    return <main className="form-signin w-100 m-auto">
        <form onSubmit={signin}>
            <img className="mb-4" src={loginLogo} alt="login-logo" width="80" height="80" style={{
                display: 'block',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
            }} />
            <h1 className="h3 mb-3 fw-normal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sign In</h1>

            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="Email or Username" onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Login</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPasswd(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
}