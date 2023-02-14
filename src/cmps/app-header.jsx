import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return (
        <header className="app-header layout full">
            <div className='header-top full'>משלוח חינם ברכישה מעל 399 ש"ח</div>
            <div className='nav-container'>
                {/* <h3 className="logo">Yoga Shop</h3> */}
                <NavLink to="/" className="logo">Yoga Shop</NavLink>
                <nav>
                    <NavLink to="/collections/yoga-mats">מזרני יוגה</NavLink>
                    <NavLink to="/collections/yoga-accessories">אביזרים</NavLink>
                    <NavLink to="/collections/yoga-clothings">בגדי יוגה</NavLink>
                    <NavLink to="/about">מי אנחנו</NavLink>
                    <NavLink to="/contact">צור קשר</NavLink>
                </nav>
                {/* <NavLink to="/cart" className="cart">cart</NavLink> */}
                <button className='cart'>cart</button>
            </div>
        </header >
    )

}

