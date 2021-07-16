import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { BrushChartOption } from '../component/config';

function Brush(props) {
    const [data, setData] = React.useState(BrushChartOption);

    React.useEffect(() => {
        let simpleResponse = [
            {
                "Price": "11000",
                "TotalCount": "5"
            }
            , 
            {
                "Price": "12000",
                "TotalCount": "74"
            }
            , 
            {
                "Price": "13000",
                "TotalCount": "87"
            }
            , 
            {
                "Price": "14000",
                "TotalCount": "11"
            }
            , 
            {
                "Price": "15000",
                "TotalCount": "84"
            }
        ]

        let simpleSeriesData = [];
        let simpleCategoriesData = [];
        simpleResponse.map((data) => {
            simpleSeriesData.push(data.TotalCount);
            simpleCategoriesData.push(data.Price);
        });

        let detailResponse = [
            {   
                "Channel": "11st",
                "Data": [
                    {
                        "Price": "11000",
                        "TotalCount": "5"
                    }
                    , 
                    {
                        "Price": "12000",
                        "TotalCount": "74"
                    }
                    , 
                    {
                        "Price": "13000",
                        "TotalCount": "87"
                    }
                    , 
                    {
                        "Price": "14000",
                        "TotalCount": "11"
                    }
                    , 
                    {
                        "Price": "15000",
                        "TotalCount": "84"
                    }
                ]
            }
            , 
            {
                "Channel": "노노마켓",
                "Data": [
                    {
                        "Price": "11000",
                        "TotalCount": "6"
                    }
                    , 
                    {
                        "Price": "12000",
                        "TotalCount": "75"
                    }
                    , 
                    {
                        "Price": "13000",
                        "TotalCount": "88"
                    }
                    , 
                    {
                        "Price": "14000",
                        "TotalCount": "12"
                    }
                    , 
                    {
                        "Price": "15000",
                        "TotalCount": "85"
                    }
                ]
            }
            ,
            {
                "Channel": "G마켓",
                "Data": [
                    {
                        "Price": "11000",
                        "TotalCount": "7"
                    }
                    ,
                    {
                        "Price": "12000",
                        "TotalCount": "76"
                    }
                    , 
                    {
                        "Price": "13000",
                        "TotalCount": "89"
                    }
                    , 
                    {
                        "Price": "14000",
                        "TotalCount": "13"
                    }
                    , 
                    {
                        "Price": "15000",
                        "TotalCount": "86"
                    }
                ]
            }
        ]

        let detailSeriesData = [];
        let detailCategoriesData = [];
        let detailDataArr;
        detailResponse.map((data) => {
            detailDataArr = [];

            data.Data.map((data) => {
                //카테고리
                if(!detailCategoriesData.includes(data.Price)) {
                    detailCategoriesData.push(data.Price);
                }
                //시리즈
                detailDataArr.push(data.TotalCount);
            });

            //셋팅
            detailSeriesData.push({
                name: data.Channel,
                data: detailDataArr
            });
        });

        setData({
            detailOptions: {
                chart: {
                    id: 'detail',
                    type: 'line',
                    height: 230,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                legend: {
                    show: true,
                    position: 'right'
                },
                xaxis: {
                    categories: detailCategoriesData,
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    show: false
                }
            },
            detailSeries: detailSeriesData,
            simpleOptions: {
                chart: {
                    id: 'simple',
                    height: 130,
                    type: 'line',
                    brush:{
                        target: 'detail',
                        enabled: true
                    },
                    selection: {
                        enabled: true,
                        xaxis: {
                            min: 1,
                            max: 3
                        }
                    },
                },
                colors: ['#008FFB'],
                grid: {
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                xaxis: {
                    categories: simpleCategoriesData,
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    show: false
                }
            },
            simpleSeries: [{
                name: 'Price',
                data: simpleSeriesData
            }]
        });
    }, []);

    return (
        <>
            <div id="detail">
                <ReactApexChart options={data.detailOptions} series={data.detailSeries} type="line" height={230} />
            </div>
            <div id="simple">
                <ReactApexChart options={data.simpleOptions} series={data.simpleSeries} type="line" height={130} />
            </div>
        </>
    );
}

export default Brush;