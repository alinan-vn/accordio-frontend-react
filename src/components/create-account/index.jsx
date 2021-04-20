import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

class CreateAccount extends React.Component {

    constructor(){
        super()
        this.state = {
            passwordIcon: true
        }
    }

    showPassword = () => {
        let passwordInput = document.querySelector('#password')
        let repeatPasswordInput = document.querySelector('#repeat-password')
        if(passwordInput.type === 'password'){
            passwordInput.type = ''
            repeatPasswordInput.type = ''
            this.setState({
                ...this.state,
                passwordIcon: false
            })
        } else {
            passwordInput.type = 'password'
            repeatPasswordInput.type = 'password'
            this.setState({
                ...this.state,
                passwordIcon: true
            })
        }
    }

    properEyeIcon = () => {
        if(this.state.passwordIcon){
            return(
                <FontAwesomeIcon 
                    id='password-icon'
                    name='password-icon'
                    onClick={this.showPassword} 
                    className='create-account__form-input-eye' 
                    icon={faEye} 
                    size="2x" 
                />
            )
        } else {
            return(
                <FontAwesomeIcon 
                    id='password-icon'
                    name='password-icon'
                    onClick={this.showPassword} 
                    className='create-account__form-input-eye' 
                    icon={faEyeSlash} 
                    size="2x" 
                />
            )
        }
    }

    goToEmailVerification = () => {
        this.props.history.push('/email-verification')
    }

    render(){
        return(
            <section className='create-account'>
                
                <div><form className='create-account__form'>
                    <p className='create-account__form-title'>Set an email and password</p>

                    <label className='create-account__form-label'>Email<br />
                        <input className='create-account__form-input' placeholder='   gabriel.garcia@example.com' />
                    </label><br />

                    <label className='create-account__form-label'>Password<br />
                        <input 
                            id='password'
                            name='password'
                            className='create-account__form-input' 
                            placeholder='   HireMe2021!' 
                            type='password'
                        />
                        {this.properEyeIcon()}
                    </label><br />

                    <label className='create-account__form-label'>Repeat Password<br />
                        <input 
                            id='repeat-password'
                            name='repeat-password'
                            className='create-account__form-input' 
                            placeholder='   HireMe2021!' 
                            type='password'
                        />
                        {this.properEyeIcon()}
                    </label><br />
                    
                    <div className='create-account__password-lines'>
                        <hr />
                        <p>Strong</p>
                    </div>

                    <div className='create-account__form-terms-and-conditions'>
                        <input type='checkbox' />
                        <p>I accept the <a href='#target'>Terms and Conditions</a> and acknowledge the <a href='#target'>Privacy Policy</a></p>
                    </div>
                    
                    <button onClick={this.goToEmailVerification}>Continue</button>
                </form></div>

            </section>
        )
    }
}

export default CreateAccount