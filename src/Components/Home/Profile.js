import React from 'react'
import './Profile.css'
import GitLogo from '../../assets/images/github.png'
import LeetLogo from '../../assets/images/LeetCode_logo_black.png'
import LinkLogo from '../../assets/images/linkedIn.png'
import Typical from 'react-typical'
import Doc from '../../assets/resume/resume.pdf'

const Profile = () => {
    return (
        <div className='profileDiv'>
            <div className='profileParent'>
                <div className='profileDetails'>
                    <div className='profileLinks'>
                        <a href='https://github.com/yash5chandrakar' target={'_blank'} rel="noreferrer">
                            <img src={GitLogo} className='github' alt='' ></img>
                        </a>
                        <a href='https://leetcode.com/yash5chandrakar/' target={'_blank'} rel="noreferrer">
                            <img src={LeetLogo} className='leetCode' alt=''></img>
                        </a>
                        <a href='https://www.linkedin.com/in/yash-chandrakar/' target={'_blank'} rel="noreferrer">
                            <img src={LinkLogo} className='linkedIn' alt=''></img>
                        </a>
                    </div>
                    <div className='profileDetailsName'>
                        <span className='primary-text'>
                            <span > Hello, I'M   <span className='changingText'>Yash...</span> </span>
                        </span>
                    </div>
                    <div className='profileDetailsRole'>
                        <span className='typical-text'>
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 😎",
                                        2000,
                                        "Full Stack Developer 👾",
                                        2000,
                                        "React JS 💻",
                                        2000,
                                        "Node JS || Express JS 🖱️",
                                        2000,
                                    ]}
                                />
                            </h1>
                            <span className='profileDetailsTagline'>
                                Passionate and Enthusiastic programmer with a thirst for knowledge, at your Service.
                            </span>
                        </span>
                    </div>
                    <div className='download-resume'><a href={Doc} download={'Yash_Resume'} target={'_blank'} rel="noreferrer">Download Resume</a></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
