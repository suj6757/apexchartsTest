//라인
export const LineChartOption = {
    options: {
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            show : false
        }
    },
    series: []
};


//바
export const BarChartOption = {
    options: {
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            show : false
        }
    },
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


//브러쉬
export const BrushChartOption = {
    detailOptions: {
        chart: {
            id: 'detail',
            type: 'line',
            height: 230,
            toolbar: {
                show: false
            }
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            categories: []
        },
        yaxis: {
            show: false
        }
    },
    detailSeries: [],
    simpleOptions: {
        chart: {
            id: 'simple',
            height: 130,
            type: 'line',
            brush:{
                target: 'detail',
                enabled: true
            }
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            categories: []
        },
        yaxis: {
            show: false
        }
    },
    simpleSeries: []
};