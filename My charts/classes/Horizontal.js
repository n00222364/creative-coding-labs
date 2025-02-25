class Horizontal extends Chart{
    constructor(obj){
        // calls constructor function in chart.js
        super(obj)
    }

    renderBars(){
        // // chart
    push()
        translate(this.chartPosX + this.margin,this.chartPosY - this.chartHeight);
        
        



    //     // chart bars
        push()
            for(let i=0; i<this.data.length; i++){
                let yPos = (this.barWidth + this.gap)*i;
                
            
                fill(this.barColour)
                noStroke()
                // 
                rect(0,yPos,this.data[i][this.yValue]*this.scaler,this.barWidth)
                // bar text
                fill (this.axisTextColour)
                noStroke();
                textAlign(LEFT, CENTER)
                textSize(10);

              
            }
        pop()
      // chartBars end


    pop()
    }

    renderAxis(){
        // // chart
    push()
        translate(this.chartPosX,this.chartPosY);
        noFill()
        stroke(this.axisColour)
        strokeWeight(this.axisThickness)
        line(0,0,0,-this.chartHeight)
        line(0,0,this.chartWidth,0)
    pop()
    }

    renderTicks(){
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
        text(Math.ceil(maxValue / (i+1)), -tickIncrement * i + this.chartHeight,20)


    }

    pop()
    }

    renderLabels(){
        // // chart
    push()
        translate(this.chartPosX + this.margin,this.chartPosY - this.chartHeight);


        push()
            for(let i=0; i<this.data.length; i++){
                let xPos = (this.barWidth + this.gap)*i;
                
            
                // bar text
                fill (this.axisTextColour)
                noStroke();
                textAlign(RIGHT, CENTER)
                textSize(10);

               // X axis text
                push()
                    translate(-30,xPos + (this.barWidth/2))
                    // rotate(60)
                    text (this.data[i][this.xValue],0,0);
                pop()



                // Y axis text
                // push()
                //     translate(xPos + (this.barWidth/2),80)
                //     // rotate(60)
                //     text (this.data[i][this.yValue],0,0);
                // pop()
                // max%num=0;
            }
        pop()
      // chartBars end


    pop()
    }
}
