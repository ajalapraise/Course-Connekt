import React from 'react'
import { useParams } from 'react-router-dom';
import DashLayout from '../../components/dashboardLayout/DashLayout'
import { LayoutProps } from '../../components/courseLayout/Layout';
import { courseList } from '../../components/coursesDetails/CourseDetails.';



const Dashboard: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const courseId = parseInt(id || '', 10);

    const selectedCourse: LayoutProps | undefined = courseList.find(
        (course) => course.id === courseId
    );

    if (selectedCourse) {


        return (
            <div className='dash-cont'>
                {/* Pass the selected course details to the DashLayout component */}
                <DashLayout {...selectedCourse} />
            </div>
        )
    }
    return (<div>Course not found.</div>);

};



export default Dashboard