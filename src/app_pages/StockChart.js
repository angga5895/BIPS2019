import React from 'react';
import ReactDOM from 'react-dom';
import AnyChart from '../../node_modules/anychart-react/dist/anychart-react.min.js';
import anychart from 'anychart';
import {cssmode} from "../App";

const StockChart = () => {

    // let data = [
    //     [Date.UTC('2007', '07', '23'), 23.55, 23.88, 23.38, 23.62],
    //     [Date.UTC('2007', '07', '24'), 22.65, 23.7, 22.65, 23.36],
    //     [Date.UTC('2007', '07', '25'), 22.75, 23.7, 22.69, 23.44],
    //     [Date.UTC('2007', '07', '26'), 23.2, 23.39, 22.87, 22.92],
    //     [Date.UTC('2007', '07', '27'), 23.98, 24.49, 23.47, 23.49],
    //     [Date.UTC('2007', '07', '30'), 23.55, 23.88, 23.38, 23.62],
    //     [Date.UTC('2007', '07', '31'), 23.88, 23.93, 23.24, 23.25],
    //     [Date.UTC('2007', '08', '01'), 23.17, 23.4, 22.85, 23.25],
    //     [Date.UTC('2007', '08', '02'), 22.65, 23.7, 22.65, 23.36],
    //     [Date.UTC('2007', '08', '03'), 23.2, 23.39, 22.87, 22.92],
    //     [Date.UTC('2007', '08', '06'), 23.03, 23.15, 22.44, 22.97],
    //     [Date.UTC('2007', '08', '07'), 22.75, 23.7, 22.69, 23.44]
    // ];

    // // create a chart
    // let chart = anychart.candlestick();

    // // set the interactivity mode
    // chart.interactivity("by-x");

    // // create a japanese candlestick series and set the data
    // let series = chart.candlestick(data);
    // series.pointWidth(10);

    // // set the chart title
    // chart.title("Candlestick Chart: Basic Sample");

    // // set the titles of the axes
    // chart.xAxis().title("Date");
    // chart.yAxis().title("Price, $");

    // chart.background().fill("#181717");

    // // set the container id
    // chart.container("container");

    // // initiate drawing the chart
    // chart.draw();

    // return (
    //     <AnyChart width={703} height={340} instance={chart} title="Stock demo" />
    // );


    // =================================================================================================
    let datas = {
        stock: "AALI",
        data:
            [
                ["2004-01-02", 92.86, 93.05, 91.2, 91.55, 5327800],
                ["2004-01-05", 92, 93.09, 92, 93.05, 5276300],
                ["2004-01-06", 92.2, 93.19, 92.14, 93.06, 4380000],
                ["2004-01-07", 93.14, 93.38, 92.47, 92.78, 4927600],
                ["2004-01-08", 93.21, 93.21, 92.03, 93.04, 6179800],
                ["2004-01-09", 91.75, 92.35, 91, 91.21, 7930900],
                ["2004-01-12", 91.21, 92.14, 91.21, 91.55, 5130400],
                ["2004-01-13", 91.45, 91.51, 89.01, 89.7, 8842500],
                ["2004-01-14", 89.9, 90.46, 89.75, 90.31, 5505100],
                ["2004-01-15", 95.07, 95.65, 93.55, 94.02, 19812000],
                ["2004-01-16", 95, 95.35, 94.71, 95.32, 9302000],
                ["2004-01-20", 96, 97.44, 95.73, 97.1, 9285100],
                ["2004-01-21", 97.23, 98.04, 96.64, 97.7, 6949000],
                ["2004-01-22", 97.84, 98.16, 97.32, 97.51, 4371600],
                ["2004-01-23", 97.82, 98.21, 97.1, 97.9, 5283900],
				["2004-01-24", 95.07, 95.65, 93.55, 94.02, 19812000],
                ["2004-01-25", 95, 95.35, 94.71, 95.32, 9302000],
                ["2004-01-26", 96, 97.44, 95.73, 97.1, 9285100],
                ["2004-01-27", 97.23, 98.04, 96.64, 97.7, 6949000],
                ["2004-01-28", 97.84, 98.16, 97.32, 97.51, 4371600],
                ["2004-01-29", 97.82, 98.21, 97.1, 97.9, 5283900],

            ]
    }
    // "Date", "open", "high", "low", "close", "volume", "frequency", "value", "previous"]

    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/csv-data/aapl-daily.csv

    // anychart.data.loadCsvFile('https://cdn.anychart.com/csv-data/aapl-daily.csv', function (data) {
    // create data table on loaded data
    var dataTable = anychart.data.table();
    dataTable.addData(datas.data);

    // map loaded data
    var mapping = dataTable.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4,
        value: {
            column: 5,
            type: 'sum'
        }
    });

    // create stock chart
    var chart = anychart.stock();
    // set chart padding
    chart.padding().right(60);

    // create plot on the chart
    var plot = chart.plot(0);

    // enabled x-grid/y-grid
    plot
        .xGrid(true)
        .yGrid(true);

    // set orientation y-axis to the right side
    plot.yAxis().orientation('right');

    // create candlestick series on the plot
    var stockSeries = plot.candlestick(mapping);
    // set series settings
    stockSeries.name(datas.stock)
        .zIndex(50);
    stockSeries.risingFill('green', 0.5)
        .fallingFill('red', 0.5)
        .risingStroke('green', 0.5)
        .fallingStroke('red', 0.5);

    // create EMA indicators with period 50 on the plot
    // var ema = plot.ema(dataTable.mapAs({
    //     'value': 4
    // }));
    // ema.series().stroke('1.5 #5FB1EE');

    // // create annotation
    // var annotation = plot.annotations();
    // // create annotation triangle
    // annotation.triangle({
    //     // X - part of the first anchor
    //     xAnchor: '2016-09-09',
    //     // Y - part of the first anchor
    //     valueAnchor: 103.13,
    //     // X - part of the second anchor
    //     secondXAnchor: '2016-09-15',
    //     // Y - part of the second anchor
    //     secondValueAnchor: 115.57,
    //     // X - part of the third anchor
    //     thirdXAnchor: '2016-10-25',
    //     // Y - part of the third anchor
    //     thirdValueAnchor: 118.25,
    //     // set stroke settings
    //     stroke: '1.5 #6E9C4E 0.5',
    //     // set fill settings
    //     fill: '#6E9C4E 0.15',
    //     // disable interaction with annotation
    //     allowEdit: false
    // });

    // create volume series on the plot
    var volumeSeries = plot.column(mapping);
    // set series settings
    volumeSeries.name('Volume')
        .zIndex(100)
        .maxHeight('20%')
        .bottom(0);
    volumeSeries.legendItem({
        iconEnabled: false,
        textOverflow: ''
    });

    // create a logarithmic scale
    var customScale = anychart.scales.log();
    // sets y-scale
    volumeSeries.yScale(customScale);

    // set volume rising and falling stroke settings
    volumeSeries.risingStroke('red');
    volumeSeries.fallingStroke('green');

    // set volume rising and falling fill settings
    volumeSeries.risingFill('red .5');
    volumeSeries.fallingFill('green .5');

    // set chart selected date/time range
    // chart.selectRange('2016-07-01', '2016-12-30');

    // set container id for the chart
    // chart.container('container');

    if(cssmode == 'night'){
        chart.background().fill("#181717");
    } else if (cssmode == 'light'){
        chart.background().fill("#E6E7E7");
    }

    // initiate chart drawing
    chart.draw();

    // create range picker
    var rangePicker = anychart.ui.rangePicker();
    // init range picker
    rangePicker.render(chart);

    // create range selector
    var rangeSelector = anychart.ui.rangeSelector();
    // init range selector
    rangeSelector.render(chart);
    // });

    return (
        <AnyChart height={310} instance={chart} title="Stock demo" />
    );

}

export default StockChart;