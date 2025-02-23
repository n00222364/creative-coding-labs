let data;
let cleanedData = [];
let charts = [];

// declaring the toggle button
// barcharts
let myRadio;
let Radios;

// horizontals
let hRadio;
let h2Radio;





function preload() {
    data = loadTable('data/Combined.csv', 'csv', 'header')


}

function setup() {
    createCanvas(2000, 2000);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    rectMode();
    // calls all the radios we assign to each chart in createRadios function.
    createRadios();
   

    // Charts
    // Top left
    charts.push(new BarChart({
        data:cleanedData,
        xValue: "Age_Group",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX:50,
        chartPosY:450,
        // where this.Radios is assigned
        Radios: myRadio
    }));

    // right chart
     charts.push(new BarChart({
        data:cleanedData,
        xValue: "Age_Group",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX:500,
        chartPosY:450,
        // where this.Radios is assigned
        Radios: Radios
    }));

    // Horizontal chart
    charts.push(new Horizontal({
        data:cleanedData,
        xValue: "Age_Group",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX: 100,
        chartPosY:900,
        // where this.Radios is assigned
        Radios: hRadio
    }));
    
    charts.push(new Horizontal({
        data:cleanedData,
        xValue: "Age_Group",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX: 550,
        chartPosY:900,
        // where this.Radios is assigned
        Radios: h2Radio
    }));
    
    charts.push(new Stacked({
        data:cleanedData,
        xValue: "Age_Group",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:10,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX:1000,
        chartPosY:450,
        // where this.Radios is assigned
        Radios: myRadio
    }));


}

function draw() {
    
    background(100, 180, 145);
    charts.forEach(chart => {
        // sets the value of YValue in the chart from the radio group we assigned to each chart. instead of both charts changing yValues at once.
        chart.setY(chart.Radios.value());


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

// the data toggle buttons on the screen
function createRadios(){
    myRadio = createRadio();
    myRadio.position(150, 550);
  
    // Add a few color options.
    myRadio.option('Male');
    myRadio.option('Female');
  
    // Choose a default option.
    myRadio.selected('Male');


    // redraws the charts when the radio button value changes.
    myRadio.changed(() => {
        redraw();
    });

    Radios = createRadio();
    Radios.position(600, 550);
    
    // options
    Radios.option('Male');
    Radios.option('Female');
  
    // Choose a default option.
    Radios.selected('Male');




    // Horozontal buttons
    hRadio = createRadio();
    hRadio.position(150, 950);
  
    // options
    hRadio.option('Male');
    hRadio.option('Female');
  
    // Choose a default option.
    hRadio.selected('Male');


    h2Radio = createRadio();
    h2Radio.position(650, 950);
  
    // options
    h2Radio.option('Male');
    h2Radio.option('Female');
  
    // Choose a default option.
    h2Radio.selected('Male');




    // redraws the charts when the radio button value changes.
    myRadio.changed(() => {
        redraw();
    });


    // redraws the charts when the radio button value changes.
    Radios.changed(() => {
        redraw();
    });

    hRadio.changed(() => {
        redraw();
    });

    h2Radio.changed(() => {
        redraw();
    });
}


// pushing the objects made from the constructor to a new empty array, then we console.log the array to view the array of objects we made.
// refers to Friend.js class
// let friends = [];
// friends.push(new Friend("Dave", 289));
// friends.push(new Friend("Roger", 469));
// console.log(friends)