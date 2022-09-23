import React from 'react'

const Projects = () => {

    return (
        <div className='projectsDiv'>
            <div className='project-list-item'>
                <h3 className='project-heading'>🟠 Binge Manual (Using React)
                    <hr />
                </h3>
                <div className='project-details'>
                    <div className='project-details-left'>
                        <ul className='project-type'>
                            <li>Binge Manual is an app through which you can find shows you love more easily.</li>

                            <li>Tech Stacks: ReactJS, Fetch APIs, CSS Animations.</li>
                        </ul>
                    </div>
                    <div className='project-year'><span>09/2022</span><span><a href='https://dashing-seahorse-d8c84b.netlify.app/' rel="noreferrer" target={"_blank"} >Hosted Link</a></span>
                        <span><a href='https://github.com/yash5chandrakar/Binge-Manual' rel="noreferrer" target={"_blank"}>Code Link</a></span></div>
                </div>
            </div>
            <div className='project-list-item'>
                <h3 className='project-heading'>🟠 Todo-Grid (Using React)
                    <hr />
                </h3>
                <div className='project-details'>
                    <div className='project-details-left'>
                        <ul className='project-type'>
                            <li>Created a simple Todo-App which you can use to take and store(with local storage) your Notes.</li>
                            <li>Tech Stacks: ReactJS, CSS.</li>
                        </ul>
                    </div>
                    <div className='project-year'><span>09/2022</span><span><a href='https://sparkling-fenglisu-0431f1.netlify.app/' rel="noreferrer" target={"_blank"} >Hosted Link</a></span>
                        <span><a href='https://github.com/yash5chandrakar/Todo-Grid' rel="noreferrer" target={"_blank"}>Code Link</a></span></div>
                </div>
            </div>
            <div className='project-list-item'>
                <h3 className='project-heading'>🟠 Countdown Timer (JS)
                    <hr />
                </h3>
                <div className='project-details'>
                    <div className='project-details-left'>
                        <ul className='project-type'>
                            <li>Created a aesthetic countdown timer which gives a display of time remaining for an event.</li>

                            <li>Tech Stacks: HTML/CSS/JavaScript.</li>
                        </ul>
                    </div>
                    <div className='project-year'>
                        <span>06/2022</span>
                        <span><a href='https://coruscating-moxie-29a8df.netlify.app/' rel="noreferrer" target={"_blank"} >Hosted Link</a></span>
                        <span><a href='https://github.com/yash5chandrakar/HTML-CSS-Javascript-Countdown-Timer-Project' rel="noreferrer" target={"_blank"}>Code Link</a></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
