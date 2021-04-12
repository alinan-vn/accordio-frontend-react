import React from 'react'

class Navigation extends React.Component {

    render(){
        return(
            <section>
                <ul className='nav-before-registration'>
                    <li><a className='logo' href='/'>ACCORDIO</a></li>
                    <li><a className='push' href='/search'>Search</a></li>
                    <li><a href='/sign-in'>Sign in</a></li>
                    {/* <li><a href='/create-account'>Get Started</a></li> */}
                    <li><a href='/create-account'><button className='get-started-btn'>Get Started</button></a></li>
                </ul>
            </section>
        )
    }
}

export default Navigation