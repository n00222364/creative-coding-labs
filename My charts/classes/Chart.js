class Chart {
    constructor(obj) {

        // data for chart
        this.data = obj.data;
        // The chart itself
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 15;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 50;
        this.chartPosY = obj.chartPosY || 350;

        // Ticks
        this.axisTickThickness = obj.axisTickThickess || 2;
        this.numTicks = obj.numTicks || 10;
        this.tickLength = obj.tickLength || 10;

        // Chart settings
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = (this.chartHeight / max(cleanedData.map(row => row[this.yValue])));

        // Colours on the chart
        this.axisColour = color(101, 115, 126);
        this.barColour = color(52, 61, 70)
        this.axisTextColour = color(0);
        this.axisTickColour = color(101, 115, 126);


        // it sets the different radios for each chart instance, that we assigned to each chart.
        //  see https://p5js.org/reference/p5/createRadio/
        this.Radios = obj.Radios;
    }

    // sets the value of this.yValue after the class/new chart has been started.
    setY(YValue) {
        this.yValue = YValue;
    }

    renderBars() {
        //     // // chart
        // push()
        //     translate(this.chartPosX,this.chartPosY);





        //     // chart bars
        // push()
        //     translate(this.margin,0)
        //     for(let i=0; i<this.data.length; i++){
        //         let xPos = (this.barWidth + this.gap)*i;


        //         fill(this.barColour)
        //         noStroke()
        //         rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
        //         // bar text
        //         fill (this.axisTextColour)
        //         noStroke();
        //         textAlign(LEFT, CENTER)
        //         textSize(10);


        //     }
        // pop()
        // chartBars end


        // pop()
    }

    renderAxis() {
        //     // // chart
        // push()
        //     translate(this.chartPosX,this.chartPosY);
        //     noFill()
        //     stroke(this.axisColour)
        //     strokeWeight(this.axisThickness)
        //     line(0,0,0,-this.chartHeight)
        //     line(0,0,this.chartWidth,0)
        // pop()
    }

    renderTicks() {
        textFont('Roboto');
        // // chart
        // push()
        //     translate(this.chartPosX,this.chartPosY);
        //     noFill()
        //     stroke(this.axisTickColour)
        //     strokeWeight(this.axisTickThickness)

        //         let tickIncrement = this.chartHeight/this.numTicks;
        //         for(let i=0; i<=this.numTicks; i++){
        //             line(0,tickIncrement*-i,-this.tickLength,tickIncrement*-i,)
        //         }

        // pop()
    }

    renderLabels() {
        textFont('Roboto');
        // // chart
        // push()
        //     translate(this.chartPosX,this.chartPosY);


        //     push()
        //         translate(this.margin,0)
        //         for(let i=0; i<this.data.length; i++){
        //             let xPos = (this.barWidth + this.gap)*i;


        //             // bar text
        //             fill (this.axisTextColour)
        //             noStroke();
        //             textAlign(LEFT, CENTER)
        //             textSize(10);

        //            // X axis text
        //             push()
        //                 translate(xPos + (this.barWidth/2),10)
        //                 rotate(60)
        //                 text (this.data[i][this.xValue],0,0);
        //             pop()



        //             // Y axis text
        //             push()
        //                 translate(xPos + (this.barWidth/2),80)
        //                 // rotate(60)
        //                 text (this.data[i][this.yValue],0,0);
        //             pop()
        //             // max%num=0;
        //         }
        //     pop()
        //   // chartBars end


        // pop()
    }
}