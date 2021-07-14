import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { BarChartOption } from '../component/config';

function Bar(props) {
    const [data, setData] = React.useState(BarChartOption);

    React.useEffect(() => {
        // 추후 axios에서 받아오게 변경 예정
        let response = [
            {
                "Date": "2021-05-01",
                "Value": 0.1
            }
            , 
            {
                "Date": "2021-05-02",
                "Value": 0.1
            }
            ,
            {
                "Date": "2021-05-03",
                "Value": 0.3
            }
            , 
            {
                "Date": "2021-05-04",
                "Value": -0.1
            }
            , 
            {
                "Date": "2021-05-05",
                "Value": -0.2
            }
        ];

        let seriesData = [];
        let categoriesData = [];
        let xArr = [];
        response.map((data) => {
            seriesData.push(data.Value);
            categoriesData.push(Number(data.Date.slice(-2)));
            xArr.push(data.Date);
        });

        setData({
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: 0,
                                to: 100,
                                color: '#a5a5a5'
                            }, {
                                from: -100,
                                to: 0,
                                color: '#255594'
                            }]
                        },
                        columnWidth: '50%',
                        dataLabels: {
                            position: 'top',
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val;
                    },
                    offsetY: -22,
                    style: {
                        fontSize: '12px',
                        colors: ["#878787"]
                    }
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                annotations: {
                    yaxis: [{
                        y: 0,
                        y2: null,
                        strokeDashArray: 0,
                        borderColor: '#c2c2c2',
                        fillColor: '#c2c2c2',
                        opacity: 0,
                        offsetX: 0,
                        offsetY: 0,
                        width: '100%',
                        yAxisIndex: 0
                    }]
                },
                yaxis: {
                    show: false,
                    max: function (val) {
                        return val + 0.1;
                    },
                    min: function (val) {
                        return val - 0.1;
                    },
                    tickAmount: 2
                },
                xaxis: {
                    type: 'category',
                    categories: categoriesData,
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        formatter: function(value) {
                            return xArr[value - 1];
                        }
                    }
                },
            },
            series: [{
                name: 'Cash Flow',
                data: seriesData
            }]
        });
    }, []);

    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
        </>
    );
}

export default Bar;