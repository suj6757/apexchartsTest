import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { LineChartOption } from '../component/config';

function Line(props) {
    const [data, setData] = React.useState(LineChartOption);
    const [seriesData, setSeriesData] = React.useState([]);
    const [categoriesData, setCategoriesData] = React.useState([]);

    React.useEffect(() => {
        var response = {
             "LineData": [
                {
                    "Date": "2021-05-01",
                    "Value": 0.7
                }
                , 
                {
                    "Date": "2021-05-02",
                    "Value": 0.71
                }
                , 
                {
                    "Date": "2021-05-03",
                    "Value": 0.3
                }
                ,
                {
                    "Date": "2021-05-04",
                    "Value": 0.51
                }
                , 
                {
                    "Date": "2021-05-05",
                    "Value": 0.53
                }
            ]
        };

        let seriesArr = [];
        let categoriesArr = [];
        response.LineData.map((data) => {
            seriesArr.push(data.Value);
            categoriesArr.push(Number(data.Date.substr(8, 2)));
        })
        
        setSeriesData(seriesArr);
        setCategoriesData(categoriesArr);
    }, []);

    React.useEffect(() => {
        setData({
            ...data,
            options: {
                xaxis: {
                    categories: categoriesData,
                    title: {
                        text: ''
                    }
                },
            },
            series: [{
                name : 'total',
                data : seriesData
            }]
        });
    }, [seriesData, categoriesData]);

    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
        </>
    );
}

export default Line;