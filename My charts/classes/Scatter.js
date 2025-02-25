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
        // // chart
        push()
        translate(this.chartPosX, this.chartPosY);
        noFill()
        stroke(this.axisTickColour)
        strokeWeight(this.axisTickThickness)

        let tickIncrement = this.chartHeight / this.numTicks;
        for (let i = 0; i <= this.numTicks; i++) {
            line(0, tickIncrement * -i, -this.tickLength, tickIncrement * -i,)
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



            // Y axis text
            push()
            translate(xPos + (this.barWidth / 2), 80)
            // rotate(60)
            text(this.data[i][this.yValue], 0, 0);
            pop()
            // max%num=0;
        }
        pop()
        // chartBars end


        pop()
    }
}
