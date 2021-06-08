import React, {useState, Fragment} from 'react';
import './LoginDetails.css';
import LoggedIn from './LoggedIn';




function LoginDetails () {
    const [isLoggedIn, setLoginStatus] = useState(false);

    const  loginHandler = (event) =>  {
        event.preventDefault();
        setLoginStatus(true);
        
    };
    if(!isLoggedIn) {
        return(
            <div className="main-body">
                <form className="form-body">
                    <label>Username</label> <br />
                    <input type="text" name="Username" id="text"></input> <br/>
                    <label>Password</label> <br/>
                    <input type="password" name = "password" id="text"></input> <br/>
                    <button onClick={loginHandler}>Submit</button>
                </form>
            </div>
        );
    }
    
    return(
        <div>
             <LoggedIn isLoggedIn={isLoggedIn} setLoginStatus={setLoginStatus} />
        </div>
    );
}

export default LoginDetails;