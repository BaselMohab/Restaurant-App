import React from 'react'
import navData from './nav-data'
import logo from './wings-co.svg'

const Navbar = () => {
return (
    <header>
        <div className='nav-container'>
            <img src={logo} className='nav-img' alt='logo' />
            <nav>
                <ul className='list'>
                    {navData.map((data) => {
                        const {id, url, name} = data
                        return (
                            <li key={id}>
                                <a href={url}>{name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    </header>
)
}

export default Navbar
