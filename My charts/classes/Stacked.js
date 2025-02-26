class Stacked extends Chart {
  constructor(obj) {
    super(obj);

    // Stores the y-values (data series) that will be used for the stacked bars.
    this.yValues = obj.yValues
    
    // An array that will hold the maximum values for each data series.
    // we need this for 
    let maxValues = [];

	

	// The forEach loop iterates over this.yValues, mapping each value to its corresponding data in cleanedData and pushing it into maxValues.
	this.yValues.forEach((value) => {
		maxValues.push(cleanedData.map((row) => row[value]));
	});

    // Calculates the maximum value across all data series using the max function.
      this.maxValue = max(maxValues.flat(5));
    

    this.scaler = (this.chartHeight / this.maxValue);
  }
  renderBars() {

      push()
      translate(this.chartPosX + this.margin, this.chartPosY);
 
  
    let barColours = [color(101, 115, 126), color(0)]


    // The outer loop iterates over each data entry in cleanedData, calculating the x-position for each bar.
    for (let i = 0; i < cleanedData.length; i++) {

      // As i increases, the value of xPos increases, effectively spacing out the bars horizontally.
      // we multiply by the current index to space the bars across, to make sure they dont all stack on top of each other
      let xPos = (this.barWidth + this.gap) * i;
      push();
      
      // The inner loop iterates over the yValues, filling each segment of the bar with a color and drawing a rectangle (rect) for each data series.
      for (let j = 0; j < this.yValues.length; j++) {
        let totalSum = 0;
        // console.log(totalSum)

        // Calculate the total sum of all values in the current row
        for (let t = 0; t < this.yValues.length; t++) {
        totalSum += cleanedData[i][this.yValues[t]];  
    }

    let totalY = cleanedData[i][this.yValues[j]] / totalSum;
        fill(barColours[j]);
        noStroke();

        rect(xPos, 0, this.barWidth, -totalY * this.chartHeight);
       
        translate(0, -totalY * this.chartHeight - 1);

        
      }
      pop();
 

    }
    pop();
  }
 
 
  renderAxis() {
    // // chart
    push();
    translate(this.chartPosX, this.chartPosY);
    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);
    pop();
  }
 
  renderTicks() {


    push()
    translate(this.chartPosX, this.chartPosY);
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    


    let tickIncrement = this.chartHeight / this.numTicks;
    for (let i = 0; i <= this.numTicks; i++) {
        line(0, tickIncrement * -i, -this.tickLength, tickIncrement * -i,)
        
        textFont('Roboto');
        fill(0)
        noStroke()
        
        // we iterate  each tick and do -i to make sure the value is less each time, this.numTicks - 0 will be equal to 100, and so on.
        // diving by the ammount of ticks ensures the % stays between 0-100
        // multiplying by 100 is what gives us the percentage.
        let percentage = (this.numTicks - i) / this.numTicks * 100;
        text(Math.ceil(percentage) + "%", -40, tickIncrement * i - this.chartHeight);


    }

    pop()
  }
 
  renderLabels() {
    // // chart
    push();
    translate(this.chartPosX, this.chartPosY);
 
    push();
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
      let xPos = (this.barWidth + this.gap) * i;
 
      // bar text
      fill(this.axisTextColour);
      noStroke();
      textAlign(LEFT, CENTER);
      textSize(10);
 
      // X axis text
      push();
      translate(xPos + this.barWidth / 2, 10);
      rotate(60);
      text(this.data[i][this.xValue], 0, 0);
      pop();
 
    }
    pop();
    // chartBars end
 
    pop();
  }
}