let data;
let cleanedData = [];
let chartHeight = 300;
let chartWidth = 400;
let barWidth=30;
let margin = 15;
let gap;
let scaler;
let axisThickness=5;
let chartPosX = 50;
let chartPosY = 200;
let axisColour;
let barColour;
let axisTextColour;
let yValues = ["Female", "Male"];
let xValue = "Age_Group";
let yValueTotal = "Total";
let barColours = [];

function preload(){
    data = loadTable('data/Combined.csv', 'csv', 'header')
}

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
   
    barColours.push(color(125,34,56))
    barColours.push(color(225,34,56))


    gap = (chartWidth - (cleanedData.length * barWidth) - (margin*2))/(cleanedData.length-1)
    scaler = chartHeight/(max(cleanedData.map(row => row.Total)));

   axisColour = color(255, 204, 0);
   barColour = color(0,200,50)
   axisTextColour = color(125)
}

function draw(){
   background(200);

   push()
   translate(chartPosX,chartPosY)
//    Moves the origin of the drawing to the specified position, allowing the chart to be drawn at a specific location on the canvas.
   noFill()
   stroke(axisColour);
   strokeWeight(axisThickness)
//    draws axis
   line (0,0,0,-chartHeight)
   line (0,0,chartWidth,0)
   

   push()
//    Another push() is used to save the current state before drawing the bars.
        translate(margin,0)
        // translate(margin, 0): Moves the drawing origin to the right by the margin amount, providing space on the left side of the chart.

        // The for loop iterates over each data point in cleanedData, calculating the x-position for each bar based on its index.
        for(let i=0; i<cleanedData.length; i++){
            let xPos = (barWidth + gap)*i;
            push()
            translate(xPos,0)


            push()
            for(let j=0; j<yValues.length; j++){
                fill(barColours[j]);
                noStroke();
                // 
                rect (0,0,barWidth, -cleanedData[i][yValues[j]]*scaler);
                
                translate(0,-cleanedData[i][yValues[j]]*scaler - 1)
                //translate(0, -cleanedData[i][yValues[j]] * scaler - 1) Moves the drawing position down for the next bar, ensuring that bars are stacked vertically.
            }
            pop()
            pop()

            fill(axisTextColour);
            noStroke();
            textAlign(LEFT,CENTER);
            textSize(8);
            push()
            translate(xPos + (barWidth/2),10)
            rotate(60)
            text (cleanedData[i][xValue], 0, 0);
            pop()
        }
    pop()

   pop()
   

}

function cleanData(){
    for(let i=0; i<data.rows.length; i++ ){
        cleanedData.push(data.rows[i].obj)
   }

   for(let i=0; i<cleanedData.length; i++ ){
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }

}


