class Stacked extends Chart {
  constructor(obj) {
    super(obj);

    this.yValues = obj.yValues
    

    let maxValues = [];

	

	
	this.yValues.forEach((value) => {
		maxValues.push(cleanedData.map((row) => row[value]));
	});

	
      this.maxValue = max(maxValues.flat(5));
    console.log(this.maxValue)

    this.scaler = (this.chartHeight / this.maxValue);
  }
  renderBars() {

      push()
      translate(this.chartPosX + this.margin, this.chartPosY);
 
  
    let barColours = [color(101, 115, 126), color(0)]

    for (let i = 0; i < cleanedData.length; i++) {
      let xPos = (this.barWidth + this.gap) * i;
      push();
      

      for (let j = 0; j < this.yValues.length; j++) {
        fill(barColours[j]);
        noStroke();
        rect(xPos, 0, 10, -cleanedData[i][this.yValues[j]] * this.scaler);
       
        translate(0, -cleanedData[i][this.yValues[j]] * this.scaler - 1);
        console.log(this.scaler)
        
      }
      pop();
 

    }
    pop();
 
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
 
      // Y axis text
      push();
      translate(xPos + this.barWidth / 2, 80);
      // rotate(60)
      text(this.data[i][this.yValue], 0, 0);
      pop();
      // max%num=0;
    }
    pop();
    // chartBars end
 
    pop();
  }
}