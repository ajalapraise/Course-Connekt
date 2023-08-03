import React from 'react'
import { Layout1 } from '../../components/courseLayout/Layout'
import { courseList } from '../../components/coursesDetails/CourseDetails.'


export const Courses = () => {
    return (
        <div className='cont'>
            <h2>Courses to get you started</h2>

            <div>
                {courseList.map((course) => (
                    <Layout1 key={course.id} {...course} />
                ))}
            </div>


        </div>
    )
}

export default Courses