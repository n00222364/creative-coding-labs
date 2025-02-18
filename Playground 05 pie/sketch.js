let data;
let cleanedData = [];
let chartHeight = 250;
let chartWidth = 400;
let barWidth = 30;
let margin = 15;
let axisThickness = 1;
let chartPosX = 250;
let chartPosY = 250;
let yValue = "Female";
let xValue = "Age_Group";
let gap;
let scaler;
let axisColour;
let barColour;
let axisTextColour;

let myNewArray;
let total;
let font;

function preload() {
	data = loadTable("data/Combined.csv", "csv", "header");
	font = loadFont ('./Poppins/Poppins-Black.ttf');
}

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
	noLoop();
	cleanData();

	myNewArray= cleanedData.map(row => row.Female);
	total = 0;
	myNewArray.forEach(item => total = total + item);
	// console.log(total)
	
}

function draw() {
	background(200);

	push();
	translate(chartPosX, chartPosY);

		for(let i =0; i<myNewArray.length; i++){
		fill(random(255))
		stroke(255)
		let start = 0;

		//take item divided by total value of all items in the array, multiplied by 360 degrees.
		// determines how big the pie slice will be
		let end = ((myNewArray[i]/total*360));


		//  x y width height angle1 angle 2	    Arc mode
		arc(0,0,400,  400,   start, end,   		PIE)
		
		// takes the slice previous and makes it the new point of origin
		// the new slice will then draw from the previous slice end point, making a full pie.
		rotate(end);
		}
		textSize(100)
		textFont(font);
		fill(255,0,0)
		noStroke()
		text("Cal",0,0)

	pop()
	
}

function cleanData() {
	for (let i = 0; i < data.rows.length; i++) {
		cleanedData.push(data.rows[i].obj);
	}

	for (let i = 0; i < cleanedData.length; i++) {
		cleanedData[i].Female = parseInt(cleanedData[i].Female);
		cleanedData[i].Male = parseInt(cleanedData[i].Male);
		cleanedData[i].Total = parseInt(cleanedData[i].Total);
	}
}
