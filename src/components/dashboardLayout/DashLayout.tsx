import React from 'react'
import './dashlayout.css'
import { LayoutProps } from '../courseLayout/Layout'
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom'


const DashLayout: React.FC<LayoutProps> = ({ img, courseInst, courseName, courseDetails, students }) => {

    return (
        <div className='dashlayout-cont'>
            <div>
                <Link to="/courses" className='back-arrow'>
                    <FiArrowLeft /> Go back
                </Link>
            </div>
            <div className="header-cont">
                <div className='dashboard-details'>
                    <h1>{courseName}</h1>
                    <h4>Course Instructor: {courseInst}</h4>
                    <h5>Number of Students Enrolled: {students}</h5>
                </div>
                <div className='dashboard-img'>
                    <img src={img} alt="" />
                </div>

            </div>
            <div className='main-details'>
                {courseDetails}
            </div>
        </div >
    )
}

export default DashLayout