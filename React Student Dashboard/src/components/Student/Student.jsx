import React from 'react';
import { useSelector } from 'react-redux';
import StudentMenu from './StudentMenu/StudentMenu';
import StudentContent from './StudentContent/StudentContent';

const Student = ({ studentData }) => {
    
    const studentState = useSelector(state => state.student);
    
    const student = studentState.filter(item => item.id === studentData.id);
    const index = studentState.indexOf(student[0]);
    const showStudent = student[0].showStudent;

    return (
        <section className='student'>
            <StudentMenu 
                studentData={studentData}
                index={index} 
                showStudent={showStudent}
            />

            <StudentContent 
                studentData={studentData} 
                index={index} 
                showStudent={showStudent}
            />
        </section>
    );
};
 
export default Student;