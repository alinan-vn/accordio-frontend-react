import React from 'react'

class CreateAccount extends React.Component {

    render(){
        return(
            <section>
                <div>Set an email and password</div>
                <div><form>
                    <label>Email<br />
                        <input />
                    </label><br />

                    <label>Password<br />
                        <input />
                    </label><br />

                    <label>Repeat Password<br />
                        <input />
                    </label><br />
                    
                    <p>-- -- -- --</p> {/* bar that shows how good password is */}
                    
                    <input type='checkbox' />
                    
                    <p>I acknowledge yadadada</p>
                    
                    <button>Continue</button>
                </form></div>
            </section>
        )
    }
}

export default CreateAccount