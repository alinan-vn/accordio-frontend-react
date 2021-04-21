import React from 'react'

class CompleteAccount extends React.Component {

    goToHome = () => {
        this.props.history.push('/')
    }

    render(){
        return(
            <section className='complete-account'>
                <form className='complete-account__form'>
                    <h1>Great! Your email is verified. Let's finish setting up your account.</h1>

                    <label className='complete-account__form-input-text-label'>What is your full name?</label><br />
                    <input 
                        className='complete-account__form-input-text' 
                        placeholder='   Gabriela Garcia' 
                    /><br />

                    <label className='complete-account__form-input-text-label'>Username</label><br />
                    <input 
                        className='complete-account__form-input-text' 
                        placeholder='   gabriela.garcia' 
                    /><br />

                    <label className='complete-account__form-input-checkbox-pronouns-label'>What are your pronouns?</label><br />
                    <input 
                        className='complete-account__form-input-checkbox' 
                        type='checkbox' 
                    /><label 
                        className='complete-account__form-input-checkbox-label'>She/her/hers</label><br />
                    <input 
                        className='complete-account__form-input-checkbox' 
                        type='checkbox' 
                    /><label className='complete-account__form-input-checkbox-label'>He/him/his</label><br />
                    <input 
                        className='complete-account__form-input-checkbox' 
                        type='checkbox' 
                    /><label className='complete-account__form-input-checkbox-label'>They/them/theirs</label><br />
                    <input 
                        className='complete-account__form-input-checkbox' 
                        type='checkbox' 
                    /><label className='complete-account__form-input-checkbox-label'>Other (please type below):</label><br />
                    <input 
                        className='complete-account__form-input-text' 
                        placeholder='    first/second/third' 
                    /><br />
                    
                    <button onClick={this.goToHome} className='complete-account__form-button'>Create Account</button>
                </form>
            </section>
        )
    }
}

export default CompleteAccount