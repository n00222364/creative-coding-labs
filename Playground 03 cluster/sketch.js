let data;
let cleanedData = [];
let chartHeight = 300;
let chartWidth = 400;
let barWidth=8;
let margin = 15;
let gap;
let scaler;
let axisThickness=5;
let chartPosX = 50;
let chartPosY = 200;
let axisColour;
let barColour;
let axisTextColour;
let yValues = ["Male","Female",];
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


    gap = (chartWidth - (cleanedData.length * barWidth * yValues.length) - (margin*2))/(cleanedData.length-1)

    let maxFemales = max(cleanedData.map(row => row.Female));
    let maxMales = max(cleanedData.map(row => row.Male));
    let maxValues = [];
    maxValues.push(maxFemales,maxMales)

    let maxValue = max(maxValues)

    console.log(maxFemales, maxMales, maxValues, maxValue);



    scaler = chartHeight/(max(maxValue));

   axisColour = color(255, 204, 0);
   barColour = color(0,200,50)
   axisTextColour = color(125)
}

function draw(){
   background(200);

   push()
   translate(chartPosX,chartPosY)
   noFill()
   stroke(axisColour);
   strokeWeight(axisThickness)
   line (0,0,0,-chartHeight)
   line (0,0,chartWidth,0)
   
   push()
        translate(margin,0)
       

        for(let i=0; i<cleanedData.length; i++){
            push()
            // moves origin(0,0) -  to the right each time
            translate((gap*i + (barWidth*2)), 0)


            for(let j=0; j<yValues.length; j++){
                noStroke()
                fill(random(255));
                rect(barWidth*j,0,barWidth,-cleanedData[i][yValues[j]]*scaler);
            }
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


