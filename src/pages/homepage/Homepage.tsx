import React from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
import MySlider1 from '../../components/slider/Slider'


const Homepage = () => {

    return (
        <>
            <div className='body'>
                <h1>Welcome to Course Connekt!!!</h1>
                <h3>Home to acquire to best learning experience👌👌.</h3>
                <p>
                    Learn the in-demand skills required to take you from beginner to industry ready in 6 months. No degree or prior tech experience required.
                </p>
                <MySlider1 />

                <h5>Get stated here & apply now!!!</h5>
                <Link to='/courses'>
                    <button className='body-btn'>
                        View More
                    </button>
                </Link>

            </div>

        </>
    )
}

export default Homepage