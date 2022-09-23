import React, { useState, useEffect } from 'react'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Interests from './Interests'

const DisplayResume = (props) => {

    const choice = props.choice
    const [data, setData] = useState("")

    useEffect(() => {
        if (choice === "Education") {
            setData(<Education />)
        }
        if (choice === "Experience") {
            setData(<Experience />)
        }
        if (choice === "Skills") {
            setData(<Skills />)
        }
        if (choice === "Projects") {
            setData(<Projects />)
        }
        if (choice === "Interests") {
            setData(<Interests />)
        }
    }, [choice])



    return (
        <div className='dataDiv'>
            {data}
        </div>
    )
}

export default DisplayResume
