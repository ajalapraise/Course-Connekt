import React from 'react'
import './layout.css'
import { Link } from 'react-router-dom'

export interface LayoutProps {
    img: string,
    courseName: string,
    courseInst: string,
    description: string,
    courseDetails: JSX.Element,
    id: number,
    students: string,

}

export const Layout1: React.FC<LayoutProps> = ({
    id,
    img,
    courseInst,
    courseName,
    description,
}) => {
    return (
        <>
            <div className='course-cont'>
                <div className='course-img'>
                    <img src={img} alt="" />
                </div>
                <div className='course-details'>
                    <h1>{courseName}</h1>
                    <h5>Course Instructor: {courseInst}</h5>
                    <div className='view-cont'>
                        <p>Description: {description}</p>

                        <Link to={'/courses/' + id}>
                            <button>View</button>

                        </Link>


                    </div>

                </div>
            </div>
        </>
    )
}



