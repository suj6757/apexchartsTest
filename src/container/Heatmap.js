import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { HeatmapChartOption } from '../component/config';

function generateData(count, yrange) {
    var series = [];

    for(var i = 0; i < count; i++) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
        series.push({
            x: x,
            y: y
        });
    }

    return series;
}

function Heatmap(props) {
    const [data, setData] = React.useState(HeatmapChartOption);
    const [seriesData, setSeriesData] = React.useState([]);
    const [categoriesData, setCategoriesData] = React.useState([]);

    React.useEffect(() => {
        setSeriesData([
            {
                name: 'Jan',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Feb',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Mar',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Apr',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'May',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Jun',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Jul',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Aug',
                data: generateData(20, { min: -30, max: 55 })
            },
            {
                name: 'Sep',
                data: generateData(20, { min: -30, max: 55 })
            }
        ]);
        
        //setCategoriesData(['10대', '20대', '30대', '40대', '50대']);
    }, []);

    
    React.useEffect(() => {
        setData({
            ...data,
            series: seriesData
        });
    }, [seriesData, categoriesData]);
    
   
    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="heatmap" height={350} />
        </>
    );
}

export default Heatmap;