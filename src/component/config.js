//라인
export const LineChartOption = {
    options: {
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
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
        //colors: [],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: [],
            title: {
                text: ''
            }
        },
        yaxis: {
            title: {
                text: ''
            },
            //min: 5,
            //max: 40,
            show : false
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    },
    series: []
};


//라인
export const BarChartOption = {
    options: {},
    series: []
};

//히트맵
export const HeatmapChartOption = {
    options: {
        chart: {
            height: 350,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: 0.00,
                        to: 0.19,
                        name: 'min',
                        color: '#00A100'
                    },
                    {
                        from: 0.20,
                        to: 0.39,
                        name: 'low',
                        color: '#a6d082'
                    },
                    {
                        from: 0.40,
                        to: 0.59,
                        name: 'medium',
                        color: '#ffea89'
                    },
                    {
                        from: 0.60,
                        to: 0.79,
                        name: 'high',
                        color: '#FFB200'
                    },
                    {
                        from: 0.80,
                        to: 1.00,
                        name: 'extreme',
                        color: '#FF0000'
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1
        },
        xaxis: {
            type: 'category',
            position: 'top',
            tickPlacement: 'on',
            axisTicks: {
                show: false,
            }
        },
        yaxis: {
            reversed: true
        },
        legend: {
            show:false
        },
        grid: {
            show:true,
            borderColor: '#646464',
            strokeDashArray: 1,
            position: 'front',
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    },
    series: []
};