import './DC.scss'
import axiosInstance from '../../axios';
import { useState } from 'react';
import {Toaster, toast} from 'react-hot-toast';

const DC = () => {
    const [studentName, setStudentName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [schoolArea, setSchoolArea] = useState('');
    const [caste, setCaste] = useState('');
    const [dropoutReason, setDropoutReason] = useState('');
    const [dropoutYear, setDropoutYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [pincode, setPincode] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();

        const reqBody = {
            studentName,
            gender,
            age,
            schoolName,
            schoolArea,
            caste,
            dropoutReason,
            dropoutYear,
            contactInformation: {
                phoneNumber,
                email,
                address: {
                    state,
                    district,
                    pincode
                }
            }
        }

        axiosInstance().post('/send-data/', reqBody).then((res) => {
            console.log(res);

            toast.success('Data saved successfully!', {
                duration: 4000,
                position: 'bottom-right',
            });

            setStudentName('');
            setGender('');
            setAge('');
            setSchoolName('');
            setSchoolArea('');
            setCaste('');
            setDropoutReason('');
            setDropoutYear('');
            setPhoneNumber('');
            setEmail('');
            setState('');
            setDistrict('');
            setPincode('');
        }).catch((err) => {
            console.log(err);
            toast.error(err, {
                duration: 4000,
                position: 'bottom-right',
            });
        });
    };

    return (
        <>
            <div className='form-container'>
                <h1>Data Collection Portal</h1>
                <div className='form-inputs'>
                    <div className='left-div'>
                        <div>
                            <label htmlFor="studentName">Student Name</label>
                            <input type="text" id="studentName" onChange={(e) => { setStudentName(e.target.value) }} value={studentName} />
                        </div>

                        <div>
                            <label htmlFor='gender'>Gender</label>
                            <select id='gender' value={gender} onChange={(e) => { setGender(e.target.value) }}>
                                <option>Select gender</option>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Others'>Others</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="age">Age</label>
                            <input type="number" id="age" onChange={(e) => { setAge(e.target.value) }} value={age} />
                        </div>

                        <div>
                            <label htmlFor="schoolName">School Name</label>
                            <input type="text" id="schoolName" onChange={(e) => { setSchoolName(e.target.value) }} value={schoolName} />
                        </div>

                        <div>
                            <label htmlFor="schoolArea">School Area</label>
                            <select id='schoolArea' value={schoolArea} onChange={(e) => { setSchoolArea(e.target.value) }}>
                                <option>Select school area</option>
                                <option value='Urban'>Urban</option>
                                <option value='Rural'>Rural</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="caste">Caste</label>
                            <select id='caste' value={caste} onChange={(e) => { setCaste(e.target.value) }}>
                                <option>Select caste</option>
                                <option value='SC'>SC</option>
                                <option value='ST'>ST</option>
                                <option value='OBC'>OBC</option>
                                <option value='General'>General</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="dropoutReason">Dropout Reason</label>
                            <select id='dropoutReason' value={dropoutReason} onChange={(e) => { setDropoutReason(e.target.value) }}>
                                <option value="Bad teaching quality">Bad teaching quality</option>
                                <option value="Financial Problems" >Financial Problems</option>
                                <option value="Gender Discrimination">Gender Discrimination</option>
                                <option value="Lack of Support for Marginalized Communities">Lack of Support for Marginalized Communities</option>
                                <option value="Early Marriages">Early Marriages</option>
                            </select>
                        </div>
                    </div>

                    <div className='right-div'>
                        <div>
                            <label htmlFor="dropoutYear">Dropout Year</label>
                            {/* <input type="number" id="dropoutYear" onChange={(e) => { setDropoutYear(e.target.value) }} value={dropoutYear} /> */}
                            <select id='dropoutYear' value={dropoutYear} onChange={(e) => { setDropoutYear(e.target.value) }}>
                                <option>Select dropout year</option>
                                <option value='2021'>2021</option>
                                <option value='2020'>2020</option>
                                <option value='2019'>2019</option>
                                <option value='2018'>2018</option>
                                <option value='2017'>2017</option>
                                <option value='2016'>2016</option>
                                <option value='2015'>2015</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="number" id="phoneNumber" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                        </div>

                        <div>
                            <label htmlFor="state">State</label>
                            <select id='state' value={state} onChange={(e) => { setState(e.target.value) }}>
                                <option>Select state</option>
                                <option value='Andhra Pradesh'>Andhra Pradesh</option>
                                <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                                <option value='Assam'>Assam</option>
                                <option value='Bihar'>Bihar</option>
                                <option value='Chhattisgarh'>Chhattisgarh</option>
                                <option value='Goa'>Goa</option>
                                <option value='Gujarat'>Gujarat</option>
                                <option value='Haryana'>Haryana</option>
                                <option value='Himachal Pradesh'>Himachal Pradesh</option>
                                <option value='Jharkhand'>Jharkhand</option>
                                <option value='Karnataka'>Karnataka</option>
                                <option value='Kerala'>Kerala</option>
                                <option value='Madhya Pradesh'>Madhya Pradesh</option>
                                <option value='Maharashtra'>Maharashtra</option>
                                <option value='Manipur'>Manipur</option>
                                <option value='Meghalaya'>Meghalaya</option>
                                <option value='Mizoram'>Mizoram</option>
                                <option value='Nagaland'>Nagaland</option>
                                <option value='Odisha'>Odisha</option>
                                <option value='Punjab'>Punjab</option>
                                <option value='Rajasthan'>Rajasthan</option>
                                <option value='Sikkim'>Sikkim</option>
                                <option value='Tamil Nadu'>Tamil Nadu</option>
                                <option value='Telangana'>Telangana</option>
                                <option value='Tripura'>Tripura</option>
                                <option value='Uttarakhand'>Uttarakhand</option>
                                <option value='Uttar Pradesh'>Uttar Pradesh</option>
                                <option value='West Bengal'>West Bengal</option>

                            </select>
                        </div>

                        <div>
                            <label htmlFor="district">District</label>
                            <input type="text" id="district" onChange={(e) => { setDistrict(e.target.value) }} value={district} />
                        </div>

                        <div>
                            <label htmlFor="pincode">Pincode</label>
                            <input type="number" id="pincode" onChange={(e) => { setPincode(e.target.value) }} value={pincode} />
                        </div>
                    </div>
                </div>

                <div className='form-buttons'>
                    <button id='submitButton' onClick={() => {
                        handleSubmit();
                    }}>Submit</button>

                    <button id='reset-button' onClick={() => {
                        setStudentName('');
                        setGender('');
                        setAge('');
                        setSchoolName('');
                        setSchoolArea('');
                        setCaste('');
                        setDropoutReason('');
                        setDropoutYear('');
                        setPhoneNumber('');
                        setEmail('');
                        setState('');
                        setDistrict('');
                        setPincode('');
                    }
                    }>Reset</button>

                    <input type='file' id='file' />
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default DC;