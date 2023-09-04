<template>
    <div>
        <figure class="highcharts-figure">
            <div id="container"></div>
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
            Highcharts.chart('container', {
                legend: {
    enabled: false, // Set enabled to false to hide the legends
  },
  credits: {
    enabled: false, // Set enabled to false to hide the Highcharts.com link
  },
title: {
    text: ' '
},
chart: {
    height: 320, // Set the height of the chart container (adjust to your desired height)
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
      text: '', // Set the title text to an empty string to remove it
    },
    type: 'logarithmic',
    minorTickInterval: 0.1,
    accessibility: {
        rangeDescription: 'Range: 0.1 to 1000'
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
              fillColor: '#9C27B0', // Set the marker fill color
            },
          },
          line: {
            color: '#9C27B0', // Set the line color
          },
        },
series: [{
    data: [1, 8 , 2, 16, 3, 32, 4, 38, 2, 34, 5, 29],
}]
});
        }
    }
}
</script>
<style scoped>
.highcharts-figure,
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