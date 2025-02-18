let data;
let cleanedData = [];
let charts = [];





function preload() {
    data = loadTable('data/Combined.csv', 'csv', 'header')


}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    rectMode();
    
    // Top left
    charts.push(new BarChart({
        data:cleanedData,
        xValue: "Age_Group",
        yValue: "Female",
        chartHeight: 200,
        chartWidth: 200,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        xPos:50,
        yPos:450
    }));

    
    
    // Top right
    //charts.push(new BarChart(cleanedData,"Age_Group","Total", 300,300,10,15,2,450,350,100))
    // Bottom
    //charts.push(new BarChart(cleanedData,"Age_Group","Male", 300,300,10,15,2,50,750,100))


}

function draw() {
    
    background(100, 180, 145);
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
    })
}



function cleanData() {
    for (let index = 0; index < data.rows.length; index++) {
        cleanedData.push(data.rows[index].obj)
    }

    for (let index = 0; index < cleanedData.length; index++) {
        cleanedData[index].Female = parseInt(cleanedData[index].Female)
        cleanedData[index].Male = parseInt(cleanedData[index].Male)
        cleanedData[index].Total = parseInt(cleanedData[index].Total)
    }

}



// pushing the objects made from the constructor to a new empty array, then we console.log the array to view the array of objects we made.
// refers to Friend.js class
// let friends = [];
// friends.push(new Friend("Dave", 289));
// friends.push(new Friend("Roger", 469));
// console.log(friends)