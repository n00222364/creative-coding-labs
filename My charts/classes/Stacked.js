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
        fill(barColours[j]);
        noStroke();
        // The height of each rectangle is scaled by this.scaler to fit within the chart height.

        // we get the xPos and draw the bar at the origin, after we set the width of the bar we then calc the y using - to make sure it goes upward

        // we get the initial bar with cleanedData[i], then we loop through the yValues to place the next bar directly on top of the previous bar
        rect(xPos, 0, this.barWidth, -cleanedData[i][this.yValues[j]] * this.scaler);
       

        // we translate the draw the next bar on top of the previous bar, we leave a -1 pixel gap to seperate the bars 
        translate(0, -cleanedData[i][this.yValues[j]] * this.scaler - 1);

        
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
    line(0, 0, 0, -this.chartHeight * this.scaler);
    line(0, 0, this.chartWidth, 0);
    pop();
  }
 
  renderTicks() {
    // // // chart
    // push();
    // translate(this.chartPosX, this.chartPosY);
    // noFill();
    // stroke(this.axisTickColour);
    // strokeWeight(this.axisTickThickness);
 
    // let tickIncrement = this.chartHeight *this.scaler / this.numTicks;
    // for (let i = 0; i <= this.numTicks; i++) {
    //   line(0, tickIncrement * -i, -this.tickLength, tickIncrement * -i);
    // }
 
    // pop();

    push()
    translate(this.chartPosX, this.chartPosY);
    noFill()
    stroke(this.axisTickColour)
    strokeWeight(this.axisTickThickness)
    


    let tickIncrement = this.chartHeight / this.numTicks * this.scaler;
    for (let i = 0; i <= this.numTicks; i++) {
        line(0, tickIncrement * -i, -this.tickLength, tickIncrement * -i,)
        
        textFont('Roboto');
        fill(0)
        noStroke()
        // we calculate the tick values by taking the max value divided by the length of the indexes and we add 1 to stop it from displaying "infinity"
        // as i increases the value moves down the y-axis
        // we do -this.chartHeight * this.scaler to adjust the chart height to match to fit the ticks
        text(Math.ceil(this.maxValue / (i+1)),-40, tickIncrement * i - this.chartHeight * this.scaler)


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