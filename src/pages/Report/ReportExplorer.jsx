import React from 'react';
import { Bar } from 'react-chartjs-2';
import studentData from './StudentData'
import './ReportExplorer.scss'

const ReportExplorer = () => {
    // Function to group students by age and reason
    const groupStudentsByAgeAndReason = () => {
        const ageGroups = [15, 16, 17, 18, 19, 21, 22]; // Define your desired age groups
        const reasons = [
            'Bad teaching quality',
            'Financial Problems',
            'Gender Discrimination',
            'Lack of Support for Marginalized Communities',
            'Early Marriages',
        ];

        const dataByAgeAndReason = {};

        // Initialize dataByAgeAndReason with empty arrays
        ageGroups.forEach((age) => {
            dataByAgeAndReason[age] = {};
            reasons.forEach((reason) => {
                dataByAgeAndReason[age][reason] = 0;
            });
        });

        // Loop through studentData and count students by age and reason
        studentData.forEach((student) => {
            const { age, dropoutReason } = student;
            if (ageGroups.includes(age) && reasons.includes(dropoutReason)) {
                dataByAgeAndReason[age][dropoutReason]++;
            }
        });

        return dataByAgeAndReason;
    };

    // Extracted and grouped data
    const groupedData = groupStudentsByAgeAndReason();

    // Define labels for age groups
    const ageLabels = Object.keys(groupedData).map((age) => `${age} years`);

    const stackColors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        // Add more colors if needed
    ];

    // Define datasets for each reason
    const datasets = Object.keys(groupedData[15]).map((reason,index) => ({
        label: reason,
        data: ageLabels.map((age) => groupedData[parseInt(age)].hasOwnProperty(reason) ? groupedData[parseInt(age)][reason] : 0),
        backgroundColor: stackColors[index],
        borderColor:'black',
        borderWidth:0.5// Update with appropriate colors
    }));

    // Define chart data
    const data = {
        labels: ageLabels,
        datasets,
    };

    // Define chart options
    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className='barResAge'>
            <Bar data={data} options={options} />
            <h2>Stacked Bar Chart - Dropout Reasons by Age</h2>
        </div>
    );
};

export default ReportExplorer;
