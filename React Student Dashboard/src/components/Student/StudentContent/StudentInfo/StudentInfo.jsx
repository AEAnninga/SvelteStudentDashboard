import React from 'react';
import PersonalData from './PersonalData/PersonalData';
import RadarChart from './RadarChart/RadarChart';
import RadarChartButton from './RadarChart/RadarChartButton';

const StudentInfo = ({ studentData, index }) => {
    return ( 
        <>
            <PersonalData studentData={studentData} index={index}/>
            <RadarChartButton index={index} />
            <RadarChart studentData={studentData} index={index}/>
        </>
    );
};
 
export default StudentInfo;