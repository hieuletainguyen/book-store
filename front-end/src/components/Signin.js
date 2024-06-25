import {useState} from "react";
import "./Signin.css";
import {useNavigate} from "react-router-dom";
function Signin (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const validate = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })

        const data = await response.json();
        if (data.message === 'success') {
            localStorage.setItem("user", JSON.stringify({username, token: data.token}))
            props.setIsLoggedIn({
                ...props.isLoggedIn, 
                status: true, 
                username: username
            });
            
            navigate('/');
        }  else if(data.message === "fail") {
            window.alert("Incorrect password or username");

        }
    }

    const onButtonClick = () =>  {
        if ("" === username){
            window.alert("You need to enter the username");
            return;
        }

        if ("" === password) {
            window.alert("You need to enter the password");
            return ;
        }

        validate();

        
    }
    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'} >
                <div>Login</div>
            </div>
            <br />

            <div className={'inputContainer'}>
                <input value={username} placeholder="Enter your username"
                       onChange={(e) => setUsername(e.target.value)}
                       className={'inputBox'} />
                
            </div>
            <br />
            <div className={'inputContainer'}>
                <input type="password"
                       value={password} placeholder="Enter your password"
                       onChange={(e) => setPassword(e.target.value)} 
                       className={'inputBox'} />
            </div>
            <br />

            <div className={'inputContainer'} >
                <input className={"inputButton"} type="button" onClick={onButtonClick} value={"Log in"} />
            </div>
        </div>
    )
}
 
export default Signin;