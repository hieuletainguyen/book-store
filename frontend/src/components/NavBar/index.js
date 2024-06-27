import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavElement";
import "../Signin.css"
import { useNavigate } from 'react-router-dom';

const NavBar = (props) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        props.setIsLoggedIn({
            ...props.isLoggedIn, 
            status: false, 
            username: "" 
        })
        navigate('/');

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