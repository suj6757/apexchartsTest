import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { LineChartOption } from '../component/config';

function Line(props) {
    const [data, setData] = React.useState(LineChartOption);
    const [seriesData, setSeriesData] = React.useState([]);
    const [categoriesData, setCategoriesData] = React.useState([]);

    React.useEffect(() => {
        setSeriesData(['1', '2', '3', '4', '2']);
        setCategoriesData(['10대', '20대', '30대', '40대', '50대']);
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
                name : '인원수',
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