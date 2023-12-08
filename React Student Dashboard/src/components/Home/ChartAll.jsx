import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { createChartAllData } from './chart-all-utils';

const ChartAll = () => {
    
    const averages = useSelector(state => state.average.assignments);
    const chartData = createChartAllData(averages, 'x', true)
    const data = chartData.data;
    const options = chartData.options;

    return (
        <div id='chart-all'>
            <Bar 
                options={options}
                data={data} 
            />
        </div>
    );
};
 
export default ChartAll;