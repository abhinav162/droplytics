import React from 'react';
import { Bar } from 'react-chartjs-2';
import studentData from './StudentData';

const StateReason = () => {
    // Define the reasons array
    const reasons = [
        'Bad teaching quality',
        'Financial Problems',
        'Gender Discrimination',
        'Lack of Support for Marginalized Communities',
        'Early Marriages',
    ];

    // Function to group students by state and reason
    const groupStudentsByStateAndReason = () => {
        const states = ['Delhi', 'Rajasthan', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Uttarakhand', 'Bihar']; // Corrected state names

        const dataByStateAndReason = {};

        // Initialize dataByStateAndReason with empty arrays
        states.forEach((state) => {
            dataByStateAndReason[state] = {};
            reasons.forEach((reason) => {
                dataByStateAndReason[state][reason] = 0;
            });
        });

        // Loop through studentData and count students by state and reason
        studentData.forEach((student) => {
            const { contactInformation, dropoutReason } = student;
            const state = contactInformation.address.state;

            if (states.includes(state) && reasons.includes(dropoutReason)) {
                dataByStateAndReason[state][dropoutReason]++;
            }
        });

        return dataByStateAndReason;
    };

    // Extracted and grouped data
    const groupedData = groupStudentsByStateAndReason();

    // Define labels for state
    const stateLabels = Object.keys(groupedData).map((state) => `${state}`);

    const stackColors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        // Add more colors if needed
    ];

    // Define datasets for each reason
    const datasets = reasons.map((reason, index) => ({
        label: reason,
        data: stateLabels.map((state) => groupedData[state]?.[reason] || 0),
        backgroundColor: stackColors[index],
        borderColor: 'black',
        borderWidth: 0.5,
    }));

    // Define chart data
    const data = {
        labels: stateLabels,
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
        <div className="barResAge">
            <Bar data={data} options={options} />
            <h2>Stacked Bar Chart - Dropout Reasons by State</h2>
        </div>
    );
};

export default StateReason;
