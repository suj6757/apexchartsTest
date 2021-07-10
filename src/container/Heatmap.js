import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { HeatmapChartOption } from '../component/config';

function Heatmap(props) {
    const [data, setData] = React.useState(HeatmapChartOption);

    React.useEffect(() => {
        let resHeatMapData = [
            {
                "Data": [
                    {
                        "Date": "4/1",
                        "Value": 0.97
                    }, {
                        "Date": "4/2",
                        "Value": 0.71
                    }, {
                        "Date": "4/3",
                        "Value": 0.8
                    }, {
                        "Date": "4/4",
                        "Value": 0.5
                    }, {
                        "Date": "4/5",
                        "Value": 0.65
                    }
                ],
                "Channel_Category": "Search Volume",
                "Channel": "Naver"
            }, {
                "Data": [
                    {
                        "Date": "4/1",
                        "Value": 0.97
                    }, {
                        "Date": "4/2",
                        "Value": 0.71
                    }, {
                        "Date": "4/3",
                        "Value": 0.8
                    }, {
                        "Date": "4/4",
                        "Value": 0.5
                    }, {
                        "Date": "4/5",
                        "Value": 0.65
                    }
                ],
                "Channel_Category": "Social",
                "Channel": "Naver Blog"
            }, {
                "Data": [
                    {
                        "Date": "4/1",
                        "Value": 0.97
                    }, {
                        "Date": "4/2",
                        "Value": 0.71
                    }, {
                        "Date": "4/3",
                        "Value": 0.8
                    }, {
                        "Date": "4/4",
                        "Value": 0.5
                    }, {
                        "Date": "4/5",
                        "Value": 0.65
                    }
                ],
                "Channel_Category": "E-Commerce",
                "Channel": "Coupang"
            }
        ]
    
        let seriesData = [];
    
        resHeatMapData.map((res, i) => {
            let dataArray = [];

            res.Data.map((res, j) => {
                dataArray.push({
                    x: res.Date,
                    y: res.Value
                });
            });

            seriesData.push({
                name: res.Channel,
                data: dataArray
            });
        });
        
        setData({
            ...data,
            series: seriesData
        });
    }, []);
   
    return (
        <>
            <ReactApexChart options={data.options} series={data.series} type="heatmap" height={350} />
        </>
    );
}

export default Heatmap;