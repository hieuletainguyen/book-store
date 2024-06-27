import {useState} from 'react';
import "./Signin.css";
import {  useNavigate } from 'react-router-dom';

function Signup (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const addAccount = async() => {
        const result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add-account`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })    
        const data = await result.json();
        console.log(data);
        
        if (data.message === "success"){
            console.log("register account sucessfully")
            setUsername("");
            setPassword("");
            navigate("/");
        }
    }

    const onButtonClick = async() => {

        if ("" === username){
            window.alert("You need to have a username");
            return;
        }

        if ("" === password) {
            window.alert("You need to set password");
            return ;
        }

        if (password.length < 7) {
            window.alert("Password should be at least 8 characters long");
            return;
        }

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/check-account`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username})
        })

        const data = await response.json();
        if (data.isExisted) {
            window.alert("Account already exists");
            setUsername("");
            setPassword("");
            return;
        }
        addAccount();
    }

    return (
        <div className={"mainContainer"}>
            <div className={"titleContainer"}>
                <div>Sign Up</div>
            </div>
            <br />
            <div className={'inputContainer'} >
                <input value={username} placeholder="Enter your username"
                       onChange={(e) => setUsername(e.target.value)} className={"inputBox"} />
            </div>
            <br />
            <div className={'inputContainer'} >
                <input type="password"
                       value={password} placeholder="Enter your password"
                       onChange={(e) => setPassword(e.target.value)} className={'inputBox'} 
                       />
            </div> 
            <br />
            <div className={'inputContainer'}>
                <input className={"inputButton"} type='button' onClick={onButtonClick} value={"Sign up"} />
            </div>
            
        </div>
    )
}

export default Signup;