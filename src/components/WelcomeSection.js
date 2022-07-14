import React from "react";
import MainPic from '../images/mainpic.png'
const WelcomeSection = ({data}) => {
    return (
        <>
        <section id="welcome-section">
        <div id="main-intro">
            <h1>{data.fullName}</h1>
            <h2>{data.mainDescription}</h2>
            <p>{data.description}</p>
        </div>
        <figure id="my-image-container">
            <img id="my-image" src={MainPic} alt="my picture"/>
        </figure>
        </section>
        </>
    )
}

export default WelcomeSection