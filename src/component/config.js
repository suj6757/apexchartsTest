//라인
export const LineChartOption = {
    options: {
        chart: {
            height: 350,
            type: 'line',
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
            /*
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
            */
        },
        markers: {
            size: 1,
            strokeColors: '#fff',
            strokeWidth: 5
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


//바
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
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'low',
                        color: '#00A100'
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'medium',
                        color: '#128FD9'
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'high',
                        color: '#FFB200'
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'extreme',
                        color: '#FF0000'
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            text: 'HeatMap Chart with Color Range'
        },
    },
    series: []
};