import './Report.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { data } from './StudentData'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)


const Report = () => {
    const navigate = useNavigate();

    const [Sdata, setData] = useState(data);

    const [resData,setResData] = useState([]);

    const [ageData, setAgeData] = useState([])

    const [stateData,setStateData] = useState([])

    const [genderData,setGenderData] = useState([])

    const [areaData,setAreaData] = useState([])

    const [casteData,setCasteData] = useState([])


    const extractresData = () => {
        var res1 = 0;
        var res2 = 0;
        var res3 = 0;
        var res4 = 0;
        var res5 = 0;

        Sdata.forEach((item) => {
            if (item.dropoutReason=='Bad teaching quality') {
                res1++;
            }
            else if (item.dropoutReason== 'Financial Problems') {
                res2++;
            }
            else if (item.dropoutReason == 'Gender Discrimination') {
                res3++;
            }
            else if (item.dropoutReason== 'Lack of Support for Marginalized Communities') {
                res4++;
            }
            else if (item.dropoutReason== 'Early Marriages') {
                res5++;
            }
        })
        setResData([res1, res2, res3, res4, res5])
    }

    useEffect(() => {
        extractresData();
    }, [])

    const extractAgeGrpData = () => {
        // create a json file and store count of each age group in it
        let age15 = 0;
        let age16 = 0;
        let age17 = 0;
        let age18 = 0;
        let age19 = 0;
        let age20 = 0;
        let age21 = 0;
        let age22 = 0;
        let age23 = 0;
        let age24 = 0;
        Sdata.forEach((item) => {
            if (item.age == 15) {
                age15++;
            }
            else if (item.age == 16) {
                age16++;
            }
            else if (item.age == 17) {
                age17++;
            }
            else if (item.age == 18) {
                age18++;
            }
            else if (item.age == 19) {
                age19++;
            }
            else if (item.age == 20) {
                age20++;
            }
            else if (item.age == 21) {
                age21++;
            }
            else if (item.age == 22) {
                age22++;
            }
            else if (item.age == 23) {
                age23++;
            }
            else if (item.age == 24) {
                age24++;
            }
        })

        setAgeData([age15, age16, age17, age18, age19, age20, age21, age22, age23, age24])
    }

    useEffect(() => {
        extractAgeGrpData();
    }, [])

    const extractStateData = () =>{
        var delhi = 0;
        var rajisthan  = 0;
        var punjab = 0;
        var haryana = 0;
        var uttarPradesh = 0;
        var uttrakhand = 0;
        var bihar = 0;
        Sdata.forEach((item)=> {
            if(item.contactInformation.address.state=='Delhi'){
                delhi++;
            }
            else if(item.contactInformation.address.state=='Rajasthan'){
                rajisthan++;
            }
            else if(item.contactInformation.address.state=='Punjab'){
                punjab++;
            }
            else if(item.contactInformation.address.state=='Haryana'){
                haryana++;
            }
            else if(item.contactInformation.address.state=='Uttar Pradesh'){
                uttarPradesh++;
            }
            else if(item.contactInformation.address.state=='Uttrakhand'){
                uttrakhand++;
            }
            else if(item.contactInformation.address.state=='Bihar'){
                bihar++;
            }
        })
        setStateData([delhi,rajisthan,punjab,haryana,uttarPradesh,uttrakhand,bihar])

    }
    useEffect(() => {
        extractStateData();
    }
    , [])




    const extractGenderData = () =>{
        var male= 0;
        var female= 0;
        var others= 0;
        var total2= 0;
        Sdata.forEach((item)=> {
            if(item.gender=='Male'){
                male++;
                total2++;
            }
            else if(item.gender=='Female'){
                female++;
                total2++;
            }
            else{
                others++;
                total2++;
            }
        });
        setGenderData([male,female,others,total2])

    }
    useEffect(() => {
        extractGenderData();
    }, [])

    const extractAreaData = () =>{
        var urban = 0;
        var rural = 0;
        var total1 =0;
        Sdata.forEach((item)=>{
            if (item.schoolArea=='Urban') {
                urban++;
                total1++;
            }
            else{
                rural++;
                total1++;
            }            
        });
        setAreaData([urban,rural,total1])
    }
    useEffect(() => {
        extractAreaData();
    }, [])

    const extractCasteData = () =>{
        var General = 0;
        var OBC = 0;
        var SC = 0;
        var total = 0;
        Sdata.forEach((item)=>{
            if (item.caste=='General') {
                General++;
                total++;
            }
            else if(item.caste=='SC'){
                SC++;
                total++;
            }
            else{
                OBC++;
                total++;
            }            
        });
        setCasteData([General,OBC,SC,total])
    }
    useEffect(() => {
        extractCasteData();
    }, [])

    const resDataSet = {
        labels: ['Bad teaching quality','Financial Problems','Gender Discrimination','Lack of Support for Marginalized Communities','Early Marriages'],
        datasets: [
            {
                label: ['Number of students'], // 'Number of students
                data: [resData[0], resData[1], resData[2], resData[3], resData[4]],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(4, 228, 132)',
                    'rgb(255, 159, 64)'
                ]
            }
        ]
    }


    const BarGraphData = {
        labels: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],

        datasets: [
            {
                label: 'Number of students',
                data: [ageData[0], ageData[1], ageData[2], ageData[3], ageData[4], ageData[5], ageData[6], ageData[7], ageData[8], ageData[9]],
                backgroundColor: [
                    'RGB(129, 100, 252)'
                ]
            }
        ]
    }
    const stateDataset = {
        labels: ['Delhi','Rajisthan','Punjab','Haryana','Uttar Pradesh','Uttrakhand','Bihar'],

        datasets: [
            {
                label: ['Number of students'],
                data: [stateData[0],stateData[1],stateData[2],stateData[3],stateData[4],stateData[5],stateData[6]],
                backgroundColor: [
                    'RGB(129, 100,1)'
                ]
            }
        ]
    }

    const genderDataset = {
        labels: ['Male','Female','Others'],
        datasets: [
        {
            label:'Gender',
            data: [(genderData[0]/genderData[3])*100,(genderData[1]/genderData[3])*100,(genderData[2]/genderData[3])*100],
            backgroundColor: [
                'rgb(4, 228, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
        
        }
        ]
    }
    const areaDataset = {
        labels: ['Urban','Rural'],
        datasets: [
        {
            label:'Area',
            data: [(areaData[0]/areaData[2])*100,(areaData[1]/areaData[2])*100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ]
        }
        ]
    }
    const casteDataset = {
        labels: ['General','SC','OBC'],
        datasets: [
        {
            label:'Caste',
            data: [(casteData[0]/casteData[3])*100,(casteData[1]/casteData[3])*100,(casteData[2]/casteData[3])*100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderColor: ['white'],
            borderWidth: 1
        }
        ]
    }



    return (
        <>
            {
                <>
                <div className='report-graph'>
                    <div className='bar-graphs'>
                    <div className='bar-graph'>
                        <Bar data={BarGraphData} />
                        <h2><a onClick={()=>{
                            navigate('/DetailedGraph')
                        }}>Age wise Data</a></h2>
                    </div>
                    <div className='bar-graph'>
                        <Bar data={stateDataset} />
                        <h2><a onClick={()=>{
                            navigate('/DetailedAreaGraph')
                        }}>state wise Data</a></h2>
                    </div>
                    </div>
                    <div className='pie-graphs'>
                    <div className='pie-graph-gender'>
                        <Pie data={genderDataset} />
                        <h2><a href="#">Gender wise Data(%)</a></h2>
                    </div>
                    <div className='pie-graph-gender'>
                        <Pie data={areaDataset} />
                        <h2><a href="#">Area wise Data(%)</a></h2>
                    </div>
                    <div className='pie-graph-gender'>
                        <Pie data={casteDataset} />
                        <h2><a href="#">Cast wise Data(%)</a></h2>
                    </div>
                    </div>
                    <div className='bar-graph-res'>
                        <Bar data={resDataSet} />
                        <h2>Reason wise Data</h2>
                </div>
                </div>
                </>
            }
        </>
    )
}

export default Report;