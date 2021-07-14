import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { LineChartOption } from '../component/config';

function Line(props) {
    const [data, setData] = React.useState(LineChartOption);

    React.useEffect(() => {
        let response = {
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
        let xArr = [];
        response.LineData.map((data) => {
            seriesArr.push(data.Value);
            categoriesArr.push(Number(data.Date.substr(8, 2)));
            xArr.push(data.Date);
        })
        
        setData({
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: false,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors : ['#868686'],
                dataLabels: {
                    enabled: true,
                    formatter: function(val, opts) {
                        return val;
                    },
                    offsetX: 0,
                    offsetY: -10,
                    background: {
                        enabled: false
                    }
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                markers: {
                    size: [2, 3],
                    strokeColors: '#fff',
                    strokeWidth: 4
                },
                xaxis: {
                    categories: categoriesArr,
                    title: {
                        text: ''
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    title: {
                        text: ''
                    },
                    show : false
                },
                tooltip: {
                    x: {
                        formatter: function(value) {
                            return xArr[value - 1];
                        }
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true
                }
            },
            series: [{
                name : 'total',
                data : seriesArr
            }]
        });
    }, []);

    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
        </>
    );
}

export default Line;