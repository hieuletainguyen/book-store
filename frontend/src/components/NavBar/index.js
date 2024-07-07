import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavElement";
import "../Signin.css"
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const NavBar = (props) => {
    const username = props.isLoggedIn.username;
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
            method: "POST", 
            credentials: 'include',
            headers: {'Content-Type': "application/json"}, 
            body: JSON.stringify({username: username, token: Cookies.get("BOOKSTORES_TOKEN")})           
        })
        Cookies.remove("BOOKSTORES_TOKEN");

        if (response.ok) {
            console.log(response.message)
            props.setIsLoggedIn({
                ...props.isLoggedIn, 
                status: false, 
                username: "" 
            })
            navigate('/');
        }

    }

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>

                    <NavLink to="/">
                        BookStore
                    </NavLink>

                    <NavLink to="/cart">
                        Cart
                    </NavLink>

                {!props.isLoggedIn.status &&
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                }

                {props.isLoggedIn.status && props.isLoggedIn.username === "admin" && 
                    <NavLink to="/add-book">
                        Add Book
                    </NavLink>
                }
                </NavMenu>

                <NavBtn>
                    {props.isLoggedIn.status ?
                        <button className="buttonLoggedIn" onClick={handleLogout}>
                            {props.isLoggedIn.username}
                        </button> :
                        <NavBtnLink to="/signin">
                            Sign In
                        </NavBtnLink>
                    }
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar;