import React from 'react'
import './ContactMe.css'
import sepLine from '../../assets/images/vertical-line.png'

const ContactMe = () => {
    return (
        <div className='contact-outerDiv' id='contactMe'>
            <h1 className='contact-heading' >Contact Me <hr /></h1>
            <div className='contact-details'>
                <div className='contact-left'>
                    <h2 className='contact-left-heading'>I would ♥️ to hear your feedback !</h2>
                    <div className='contact-details-left'>
                        <div>Your feedback will help me to improve myself.</div><br />
                        <div>Location : Bhilai, Chattisgarh <hr /></div> <br />
                        <div>Email : yash5chandrakar@gmail.com <hr /></div> <br />
                    </div>
                </div>
                <div className='contact-middleDiv'>
                    <img src={sepLine} alt='sepImage.jpg'></img>
                </div>
                <div className='contact-right'>
                    <div className='contact-form'>
                        <form className='myForm'>
                            <input type={'text'} className="inputs" name='name' placeholder='Enter Your Name' required></input>  <br />
                            <input type={'text'} className="inputs" name='email' placeholder='Enter Your Email' required></input> <br />
                            <textarea type={'text'} className="inputs" name='feedbackHere' placeholder='Write anything about any project. I would love to work with you!' rows={'15'} cols={'60'}></textarea> <br />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
