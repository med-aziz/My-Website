import React, { useEffect } from "react";
import { useStateValue } from "../utils/StateProvider";

const AppFooter = () => {
    // const [state, _] = useStateValue()
    // useEffect(()=>{

    // },[state])
    return(
        <footer>
            <section id="contact">
                <h2 id="contact-title">{/*state.language === "ENGLISH" ? "Contact me!" : "Contactez moi!"*/}contacts</h2>
                <div id="contact-options-container">
                    <div className="contact-container">
                        <img className="contact-icon" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook icon"/>
                        <a className="contact-link" target="_blank" href="https://www.facebook.com/mohamed.aziz174/">Facebook</a>
                    </div>
                    <div className="contact-container">
                        <img className="contact-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" alt="linkedin icon"/>
                        <a id="profile-link" target="_blank" className="contact-link" href="https://www.linkedin.com/in/mohamed-aziz-jedidi-883852244/">Linkedin</a>
                    </div>
                    <div className="contact-container">
                        <img className="contact-icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github icon"/>
                        <a className="contact-link" target="_blank" href="https://github.com/med-aziz?tab=repositories">github</a>
                    </div>
                    {/* <div className="contact-container">
                        <img className="contact-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="email icon"/>
                        <a className="contact-link" target="_blank" href="https://accounts.google.com">Email</a>
                    </div> */}
                </div>
            </section>
        </footer>
    )
}

export default AppFooter