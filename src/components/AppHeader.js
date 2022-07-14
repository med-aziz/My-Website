import React, { useEffect } from "react";
import { useStateValue } from "../utils/StateProvider";
import { ACTION_TYPES } from "../actions";
import { useRef } from "react";

const AppHeader = () => {
    const [state, dispatch] = useStateValue()
    const changeLanguage = (e) => {
        e.preventDefault()
        dispatch({
            type: ACTION_TYPES.SET_LANGUAGE,
            language: state.language === "FRENCH" ? "ENGLISH" : "FRENCH"
        })
        myFunction()
    }
    const navRef = useRef(null)
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        if (navRef.current.className === "topnav") {
        navRef.current.className += " responsive";
        } else {
        navRef.current.className = "topnav";
        }
    }
    useEffect(()=>{
    },[navRef])
    return(
        <header id="header">
            <div className="topnav" id="myTopnav" ref={navRef}>
                <a href="#main-intro" onClick={()=>myFunction()}>{state.language === "ENGLISH" ? "about" : "introduction"}</a>
                <a href="#projects" onClick={()=>myFunction()}>{state.language === "ENGLISH" ? "projects" : "projets"}</a>
                <a href="#contact" onClick={()=>myFunction()}>Contact</a>
                <a onClick={changeLanguage}><span className={state.language === "FRENCH" ? "active-language" : ""}>French</span>/<span className={state.language === "ENGLISH" ? "active-language" : ""}>English</span></a>
                <a className="icon" onClick={()=>myFunction()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </header>
    )
}

export default AppHeader