import React from 'react'
import SampleImage from './images/sample.png'

class EmailVerification extends React.Component {

    render(){
        return(
            <section className='email-verification'>
                <div className='email-verification__image'>
                    <img src={SampleImage} alt='sample-image' />
                </div>

                <div className='email-verification__text'>
                    <p className='email-verification__text-almost-there'>Almost there...</p>
                    <p className='email-verification__text-check-email'>Please check your email: <br /><strong>ladadaddada@gmail.com</strong><br /> to verify your account</p>
                    <p className='email-verification__text-resend'>Haven't received an email?<br /> Check your spam folder, otherwise <a href='#target'>send me a new one!</a></p>
                </div>
            </section>
        )
    }
}

export default EmailVerification