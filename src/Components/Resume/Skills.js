import React from 'react'

const Skills = () => {

    const skillProgress =
    {
        javascript: "80%",
        react: "75%",
        express: "75%",
        node: "80%",
        corejava: "80%",
        html: "80%",
        css: "85%"
    }



    return (
        <div className='skillsDiv'>
            <div className='skills-item'>
                <h3>🟠 JavaScript</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.javascript }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 React JS</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.react }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 Express JS</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.express }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 Node JS</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.node }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 Core Java</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.corejava }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 HTML</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.html }}></div>
                </div>
            </div>
            <div className='skills-item'>
                <h3>🟠 CSS</h3>
                <div className='skills-progressBar'>
                    <div className='skills-currentProgress' style={{ width: skillProgress.css }}></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
