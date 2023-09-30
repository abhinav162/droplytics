import './Policies.scss'
import { useEffect } from 'react';

const Policies = () => {

    const toggleActive = (id) => {
        const currentActive = document.getElementsByClassName("active");

        // check if currentActive id and id are same
        if (currentActive.length > 0 && currentActive[0].id === id) {
            currentActive[0].classList.remove("active");
            return;
        }

        // remove active class from currentActive
        if (currentActive.length > 0) {
            currentActive[0].classList.remove("active");
        }

        // add active class to id
        const targetButton = document.getElementById(id);
        if (targetButton) {
            targetButton.classList.toggle("active");
        }
    }

    return (
        <>
            <div className='accordian-container'>
                <h2>Policies</h2>
                <button className="accordion" id='b1' onClick={() => {
                    toggleActive("b1")
                }}>Gujarat Loan for Study Abroad (available for SEBC)</button>
                <div className="panel" >
                    <p>The Government of Gujarat and the Director of Developing Castes Welfare offer the Gujarat Loan for Study Abroad loan scheme for qualifying students identifying with SEBC (Socially and Economically Backward Classes) and EBC (Economically Backward Classes) groups.⁵
                        This initiative is available for students that have already been accepted into a foreign university and are pursuing a graduate degree, diploma, or an MBBS course abroad.The maximum loan amount is INR 15 lakhs, and the interest rate on the loan is 4% per annum.
                    </p>
                </div>

                <button className="accordion" id='b2' onClick={() => {
                    toggleActive("b2")
                }}>Foreign Studies Scheme (Loans upto Rs. 15 lakh)</button>
                <div className="panel">
                    <p>GUEEDC will also provide educational loans upto Rs. 15 lakh at 4% interest rate to candidates who wants to pursue higher studies in foreign countries. For this, candidates must have secured at-least 60% marks in 12th class and annual family must be less than Rs. 4.5 lakh p.a.</p>
                </div>

                <button className="accordion" id='b3' onClick={() => {
                    toggleActive("b3")
                }}>Tution Assistance Scheme( 15000 p.m)</button>
                <div className="panel">
                    <p>All the meritorious students of Class 10th who have secured more than 70% marks and are studying in Science stream in Class 11th and 12th will get Rs. 15,000 p.m. This assistance will be given as tuition fees from the corporation. This will be also known as Tuition Sahayata Scheme.</p>
                </div>

                <button className="accordion" id='b4' onClick={() => {
                    toggleActive("b4")
                }}>Food Bill Scheme – Private Hostel Students to Get Monthly Assistance (Rs. 1200 p.m)</button>
                <div className="panel">
                    <p>All the unreserved category students who are staying in private hostels and whose family income is less than Rs. 3 lakh p.a can get monthly assistance of Rs. 1,200 for 10 months in an year.</p>
                </div>

                <button className="accordion" id='b5' onClick={() => {
                    toggleActive("b5")
                }}>Coaching Assistance for 12th Class Students (Rs. 20,000 p.a)</button>
                <div className="panel">
                    <p>All the students of Science Stream of Class 12th can avail coaching assistance of upto Rs. 20,000 per year. This assistance would be given for the preparation of Entrance Exams like NEET and JEE.</p>
                </div>

                <button className="accordion" id='b6' onClick={() => {
                    toggleActive("b6")
                }}>Coaching Assistance for Graduate Students (Rs. 20,000 p.a)</button>
                <div className="panel">
                    <p>Students of general category who have passed their graduation degree and wants to appear for competitive exams can avail this scheme. For UPSC and other exams, the corporation will provide Rs. 20,000 towards coaching fees.</p>
                </div>

                <button className="accordion" id='b7' onClick={() => {
                    toggleActive("b7")
                }}>Amma Vodi Scheme: Andhra Pradesh </button>
                <div className="panel">
                    <p>The Amma Vodi scheme aims to provide financial assistance to mothers or guardians of school-going children. Under this scheme, eligible beneficiaries receive a financial incentive of Rs. 15,000 per annum to ensure that their children attend school regularly. The scheme has been a great success, and it has helped to increase enrollment rates and reduce dropout rates in schools across the state.</p>
                </div>

                <button className="accordion" id='b8' onClick={() => {
                    toggleActive("b8")
                }}>Jagananna Vidya Deevena Scheme</button>
                <div className="panel">
                    <p> The Jagananna Vidya Deevena scheme is a higher education scheme that provides financial assistance to students from economically weaker sections of society. Under this scheme, eligible students receive full fee reimbursement, including tuition fees, exam fees, and other charges. The scheme has helped to increase access to higher education and reduce the burden of student loans on families.</p>
                </div>
                <button className="accordion" id='b9' onClick={() => {
                    toggleActive("b9")
                }}>Education for All – Mukhyamantri Balika Protsahan Yojana</button>
                <div className="panel">
                    <p> Under the “Mukhyamantri Balika Protsahan Yojana,” the Bihar government is dedicated to promoting girls’ education and bridging the gender gap in schools. This scheme provides financial assistance and incentives to girls from economically weaker sections to encourage them to pursue education. It offers scholarships, free textbooks, uniforms, and bicycles, ensuring that girls have equal opportunities to attend school and excel academically.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Policies