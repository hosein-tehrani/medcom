<template>
    <div>
        <figure class="highcharts-figure2">
            <div id="container2"></div>
        </figure>
    </div>
</template>
<script>
import Highcharts from 'highcharts';

export default {
    data(){
        return {

        }
    },
    mounted(){
        this.loadChart()
    },
    methods : {
        loadChart(){
Highcharts.chart('container2', {
    legend: {
    enabled: false, // Set enabled to false to hide the legends
  },
  credits: {
    enabled: false, // Set enabled to false to hide the Highcharts.com link
  },
    title: {
        text: ''
    },
    chart: {
    height: 320 , // Set the height of the chart container (adjust to your desired height)
  },

    xAxis: {
        categories : ['فروردین', 'اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
        gridLineWidth: 0, // Remove gridlines
          minorGridLineWidth: 0, // Remove minor gridlines
          lineWidth: 0, // Remove x-axis line
        labels: {
            rotation: -90, // Rotate labels by -90 degrees
          },
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineWidth: 0, // Remove gridlines
    minorGridLineWidth: 0, // Remove minor gridlines
    },
    tooltip: {
    enabled : false,
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}'
},
    plotOptions: {
          scatter: {
            marker: {
              fillColor: '#FF2056', // Set the marker fill color
            },
          },
          line: {
            color: '#FF2056', // Set the line color
          },
        },
    series: [{
        name: 'Reggane',
        data: [16.0, 18.2, 23.1],
            color: '#FF2056', // Set the color for the 'Reggane' line

    }, {
        name: 'Tallinn',
        data: [-2.9, -3.6, -0.6],
            color: '#26A69A', // Set the color for the 'Tallinn' line (change to the color you want)

    }]
});
        }
    }
}
</script>
<style scoped>
.highcharts-figure2,
.highcharts-data-table table {
    min-width: 360px;
    max-width: 800px;
    margin: 1em auto;
}

.highcharts-data-table table {
    font-family: Verdana, sans-serif;
    border-collapse: collapse;
    border: 1px solid #ebebeb;
    margin: 10px auto;
    text-align: center;
    width: 100%;
    max-width: 500px;
}

.highcharts-data-table caption {
    padding: 1em 0;
    font-size: 1.2em;
    color: #555;
}

.highcharts-data-table th {
    font-weight: 600;
    padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
    padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
}

.highcharts-data-table tr:hover {
    background: #f1f7ff;
}

</style>