import React from 'react'
import './ProfilePic.css'
import Pic from '../../assets/images/My_Image.jpg'

const ProfilePic = () => {
    return (
        <div className='photo-container'>
            <img src={Pic} alt='My_Image.jpg'></img>
        </div>
    )
}

export default ProfilePic
