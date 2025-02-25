class Scatter extends Chart {
    constructor(obj) {
        // calls the parent constructor in chart.js
        //  inherits all chart.js properties.
        // lets me set global params in chart.js and personal ones in each graph class
        super(obj)
    }

    renderBars() {
        // // // chart
        push()
        translate(this.chartPosX, this.chartPosY);
        
      


        // //     // chart bars
        push()
        translate(this.margin, 0)
  
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;


            fill(this.barColour)
        //     noStroke()
            ellipse(xPos, -this.data[i][this.yValue] * this.scaler, this.barWidth, this.barWidth)
        }
        pop()
        // chartBars end


        pop()
    }

    renderAxis() {
        // // chart
        push()
        translate(this.chartPosX, this.chartPosY);
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0, 0, 0, -this.chartHeight)
        line(0, 0, this.chartWidth, 0)
        pop()
    }

    renderTicks() {
        push()
        translate(this.chartPosX, this.chartPosY);
        noFill()
        stroke(this.axisTickColour)
        strokeWeight(this.axisTickThickness)
        
        let maxValues = this.data.map((d) => d[this.yValue]);
        let maxValue = max(maxValues);


        let tickIncrement = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            line(0, tickIncrement * -i, -this.tickLength, tickIncrement * -i,)
            

            textFont('Roboto');
            fill(0)
            noStroke()
            // we calculate the tick values by taking the max value divided by the length of the indexes and we add 1 to stop it from displaying "infinity"
        // as i increases the value moves down the y-axis
        // we do -this.chartHeight * this.scaler to adjust the chart height to match to fit the ticks
            text(Math.ceil(maxValue / (i+1)),-40, tickIncrement * i - this.chartHeight)

    
        }

        pop()
    }

    renderLabels() {        
        // // chart
        push()
        translate(this.chartPosX, this.chartPosY);


        push()
        translate(this.margin, 0)
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;


            // bar text
            fill(this.axisTextColour)
            noStroke();
            textAlign(LEFT, CENTER)
            textSize(10);

            // X axis text
            push()
            translate(xPos + (this.barWidth / 2), 10)
            rotate(60)

            text(this.data[i][this.xValue], 0, 0);
            pop()



            
        }
        pop()
        // chartBars end


        pop()
    }
}
