import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

class CreateAccount extends React.Component {

    render(){
        return(
            <section className='create-account'>
                
                <div><form className='create-account__form'>
                    <p className='create-account__form-title'>Set an email and password</p>

                    <label className='create-account__form-label'>Email<br />
                        <input className='create-account__form-input' placeholder='   gabriel.garcia@example.com' />
                    </label><br />

                    <label className='create-account__form-label'>Password<br />
                        <input className='create-account__form-input' placeholder='   HireMe2021!' /><FontAwesomeIcon className='create-account__form-input-eye' icon={faEye} size="2x" />
                    </label><br />

                    <label className='create-account__form-label'>Repeat Password<br />
                        <input className='create-account__form-input' placeholder='   HireMe2021!' /><FontAwesomeIcon className='create-account__form-input-eye' icon={faEye} size="2x" />
                    </label><br />
                    
                    <p>-- -- -- --</p> {/* bar that shows how good password is */}
                    
                    <div className='create-account__form-terms-and-conditions'>
                        <input type='checkbox' />
                        <p>I accept the Terms and Conditions and acknowledge the Privacy Policy</p>
                    </div>
                    
                    <button>Continue</button>
                </form></div>

            </section>
        )
    }
}

export default CreateAccount