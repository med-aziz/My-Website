import React, { useEffect } from "react";
import { useStateValue } from "../utils/StateProvider";
import '../styles/EducationSection.css'
const EducationSection = ({data}) => {
    const [state, _] = useStateValue()
    useEffect(()=> {

    }, [state])

    return (
        <section id="education-section" className="flex-container-c flex-c-s">
            <h2>Education</h2>
            <ul className="edu-list">
                {data.map(item => 
                    (<li key={item.id}>
                        <div className="edu-container">
                            <div className="flex-container-r flex-c-b margin-b">
                                <h4 className="edu-title">{item.type}</h4>
                                <p>{item.time}</p>
                            </div>
                            <h5>{item.place}</h5>
                            <p>{item.additionalInfo}</p>
                        </div>
                    </li>)
                )}
            </ul>
        </section>
    )
}

export default EducationSection