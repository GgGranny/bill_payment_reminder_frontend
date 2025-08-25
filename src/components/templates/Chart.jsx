import ApexCharts from "apexcharts";
import { useEffect } from "react";

export const Chart = () => {
    const getChart = () => {
        var options = {
            series: [{
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41],
                color: "#454ADE"
            }],
            chart: {
                height: "100%",
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
    }
    useEffect(getChart, []);
    return (
        <div className="chart h-full w-full" id="chart">

        </div>
    )
}

export default Chart;