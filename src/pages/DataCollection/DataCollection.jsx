import './DataCollection.scss'
import axiosInstance from '../../axios';
import { useState } from 'react';

const DataCollection = () => {
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
        e.preventDefault();

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
        });
    };
    return (
        <>
            <div className='bigContainer'>
                <h1 id='Data_Collection'>Data Collection</h1>
                <div className='container'>
                    <div id='header'>
                        <div id='main'>
                            <form >
                                <div id='first'>
                                    <label htmlFor='name'> Name </label>
                                    <input type="text" name="name" id='name' value={studentName} onChange={(e) => { setStudentName(e.target.value) }} />
                                </div>
                                <div id='second'>
                                    <label htmlFor='gender'> Gender </label>
                                    <select id='gender' name="gender" style={{ textAlign: 'center' }} onChange={(e) => { setGender(e.target.value) }}>
                                        <option value="none" selected disabled hidden>Select an Option</option>
                                        <option value="male">Male</option>
                                        <option value="female" >Female</option>
                                        <option value="others" >Others</option>
                                    </select>
                                </div>
                                <div id='third'>
                                    <label htmlFor='age'> Age </label>
                                    <input type="text" id='age' name="age" onChange={(e) => { setAge(e.target.value) }} />
                                </div>

                                <div id='fifth'>
                                    <label htmlFor='caste'> Caste </label>
                                    <select name="caste" id='caste' style={{ textAlign: 'center' }} onChange={(e) => { setCaste(e.target.value) }}>
                                        <option value="none" selected disabled hidden>Select an Option</option>
                                        <option value="general" >General</option>
                                        <option value="sc/st">SC/ST</option>
                                        <option value="obc" >OBC</option>
                                    </select>
                                </div>

                                <div id='sixth'>
                                    <label htmlFor='dropout_reason'> Dropout Reason </label>
                                    <select name="dropout_reason" id='dropout_reason' style={{ textAlign: 'center' }} onChange={(e) => { setDropoutReason(e.target.value) }}>
                                        <option value="none" selected disabled hidden>Select an Option</option>
                                        <option value="Bad teaching quality">Bad teaching quality</option>
                                        <option value="Financial Problems" >Financial Problems</option>
                                        <option value="Gender Discrimination">Gender Discrimination</option>
                                        <option value="Lack of Support for Marginalized Communities">Lack of Support for Marginalized Communities</option>
                                        <option value="Early Marriages">Early Marriages</option>
                                    </select>
                                </div>

                                <div id='seventh'>
                                    <label htmlFor='dropoutYear'> Year of dropout </label>
                                    <select name="dropoutYear" id='dropoutYear' style={{ textAlign: 'center' }} onChange={(e) => { setDropoutYear(e.target.value) }}>
                                        <option value="none" selected disabled hidden>Select Year</option>
                                        <option value="2021">2021</option>
                                        <option value="2020" >2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018" >2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016" >2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014" >2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012" >2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010" >2010</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div id='main2'>
                            <form >
                                <div id='eighth'>
                                    <label htmlFor='phone_number'> Phone Number </label>
                                    <input type="text" id='phone_number' name="phone_number" onChange={(e) => { setPhoneNumber(e.target.value) }} />
                                </div>
                                <div id='ninth'>
                                    <label htmlFor='email'> Email </label>
                                    <input type="text" name="email" id='email' onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div id='tenth'>
                                    <label htmlFor='state'> State </label>
                                    <input type="text" name="state" id='state' onChange={(e) => { setState(e.target.value) }} />
                                </div>

                                <div id='eleventh'>
                                    <label htmlFor='district'> District </label>
                                    <input type="text" name="district" id='district' onChange={(e) => { setDistrict(e.target.value) }} />

                                </div>

                                <div id='twelveth'>
                                    <label htmlFor='pincode'> Pincode </label>
                                    <input type="text" name="pincode" id='pincode' onChange={(e) => {
                                        setPincode(e.target.value)
                                    }} />
                                    <div id='fourth'>
                                        <label htmlFor='school'> School Name </label>
                                        <input type="text" name="school" id='school' onChange={(e) => { setSchoolName(e.target.value) }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button id='submitButton' onClick={handleSubmit}>Submit</button>
                </div>
                <input type='file' id='file' />
            </div>
        </>
    )
}

export default DataCollection;