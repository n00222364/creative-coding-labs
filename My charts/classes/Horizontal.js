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
        // // chart
    push()
        translate(this.chartPosX,this.chartPosY);
        noFill()
        stroke(this.axisTickColour)
        strokeWeight(this.axisTickThickness)
        
            let tickIncrement = this.chartHeight/this.numTicks;
            for(let i=0; i<=this.numTicks; i++){
                line(0,tickIncrement*-i,-this.tickLength,tickIncrement*-i,)
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
