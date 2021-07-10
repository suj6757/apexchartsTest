import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import { BarChartOption } from '../component/config';

function Bar(props) {
    const [data, setData] = React.useState(BarChartOption);
    const [charData, setCharData] = useState({});

    // React.useEffect(() => {
    //     setSeriesData(['1', '2', '3', '4', '2']);
    //     setCategoriesData(['10대', '20대', '30대', '40대', '50대']);
    // }, []);

    React.useEffect(() => {
        // 추후 axios에서 받아오게 변경 예정
        let resBarDataData = [
            {
                "Date": "2021-05-01",
                "Value": 0.1
            }, {
                "Date": "2021-05-02",
                "Value": 0.1
            }, {
                "Date": "2021-05-03",
                "Value": 0.3
            }, {
                "Date": "2021-05-04",
                "Value": -0.1
            }, {
                "Date": "2021-05-05",
                "Value": -0.2
            }
        ];

        setCharData(resBarDataData);

        let seriesData = [];
        let categoriesData = [];

        resBarDataData.map((res) => {
            seriesData.push(res.Value);
            categoriesData.push(res.Date.slice(-2));
        });

        setData({
            series: [{
                name: 'Cash Flow',
                // data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                //   5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                //   48.6, -41.1, -39.6, -37.6, -29.4
                // ]
                data: seriesData
            }],
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
                    //show: true,
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
                    // categories: [
                    //   '01', '02', '03', '04', '05', '06',
                    //   '07', '08', '09', '10', '11', '12',
                    //   '13', '14', '15', '16', '17', '18',
                    //   '19', '20', '21', '22', '23', '24',
                    //   '25', '26', '27', '28', '29', '30',
                    //   '31'
                    // ],
                    categories: categoriesData,
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    }
                }
            }
        });
    }, []);

    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
        </>
    );
}

export default Bar;