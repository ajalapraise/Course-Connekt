import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer'>

            <div className="sections-cont">
                <div className='footer-logo'>
                    <h1>COURSE <br /> CONNEKT.</h1>
                    <h4 className='copyright'>&copy; 2023 Course Connekt. <br /> All rights reserved.</h4>

                </div>

                <div className='nav nav-courses'>
                    <div className='nav-header'>
                        <h3>Courses</h3>
                    </div>
                    <div className='nav-lists'>
                        <ul>
                            <li>Web Development</li>
                            <li>Product Management</li>
                            <li>Product Design</li>
                            <li>Data Science</li>
                        </ul>
                    </div>
                </div>

                <div className='nav'>
                    <div className='nav-header'>
                        <h3>About us</h3>
                    </div>
                    <div className='nav-lists'>
                        <ul>
                            <Link to='./aboutUs'>
                                <li>Our story</li>
                            </Link>
                            <Link to='/aboutUs'>
                                <li>Our Vision</li>

                            </Link>
                        </ul>
                    </div>
                </div>

                <div className='nav'>
                    <div className='nav-header'>
                        <h3>Contact us</h3>
                    </div>
                    <div className='nav-lists'>
                        <ul>
                            <li> +234 80 XXX XXX XXX</li>
                            <li>courseconnekt@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className='nav'>
                    <div className='nav-header'>
                        <h3>Resources</h3>
                    </div>
                    <div className='nav-lists'>
                        <ul>
                            <Link to='/faq'>
                                <li>FAQs</li>

                            </Link>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Footer