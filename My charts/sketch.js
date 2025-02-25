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

let font;




function preload() {
    data = loadTable('data/studentScores.csv', 'csv', 'header')
    font = loadFont ('./font/Roboto/roboto.ttf');

}

function setup() {
    createCanvas(2000, 2000);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    rectMode();
    // calls all the radios we assign to each chart in createRadios function.
    createRadios();
    textFont(font);
   

    // Charts
    // Left barchart
    charts.push(new BarChart({
        data:cleanedData,
        xValue: "scores",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 400,
        chartWidth: 300,
        barWidth:15,
        margin:15,
        axisThickness:2,
        axisTickThickness: 1,
        chartPosX:50,
        chartPosY:450,
        // where this.Radios is assigned
        Radios: myRadio
    }));

    // right barchart
     charts.push(new BarChart({
        data:cleanedData,
        xValue: "scores",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 400,
        chartWidth: 300,
        barWidth:15,
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
        xValue: "scores",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:15,
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
        xValue: "scores",
        // gets value of the button we toggle 
        yValue: myRadio.value(),
        chartHeight: 300,
        chartWidth: 300,
        barWidth:15,
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
        xValue: "scores",
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
    
    background(192,197,206);
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
        cleanedData[index].female_math_scores = parseInt(cleanedData[index].female_math_scores)
        cleanedData[index].male_math_scores = parseInt(cleanedData[index].male_math_scores)
    }


    
}

// the data toggle buttons on the screen
function createRadios(){
    myRadio = createRadio();
    myRadio.position(50, 550);
  
    // Add a few color options.
    myRadio.option('male_math_scores');
    myRadio.option('female_math_scores');
  
    // Choose a default option.
    myRadio.selected('male_math_scores');


    // redraws the charts when the radio button value changes.
    myRadio.changed(() => {
        redraw();
    });

    Radios = createRadio();
    Radios.position(500, 550);
    
    // options
    Radios.option('male_reading_scores');
    Radios.option('female_reading_scores');
  
    // Choose a default option.
    Radios.selected('male_reading_scores');




    // Horozontal buttons
    hRadio = createRadio();
    hRadio.position(100, 950);
  
    // options
    hRadio.option('male_writing_scores');
    hRadio.option('female_writing_scores');
  
    // Choose a default option.
    hRadio.selected('male_writing_scores');


    h2Radio = createRadio();
    h2Radio.position(550, 950);
  
    // options
    h2Radio.option('male_writing_scores');
    h2Radio.option('female_writing_scores');
  
    // Choose a default option.
    h2Radio.selected('male_writing_scores');




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