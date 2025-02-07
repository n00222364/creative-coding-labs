
let data;
let cleanedData = [];

function preload(){
data = loadTable('data/Combined.csv', 'csv', 'header')
}

function setup(){
createCanvas(500,500)
angleMode(DEGREES);
noLoop()
cleanData()
rectMode(CENTER);
}


function draw(){
    background(25,90,0);
   

    push();
    translate (300,300)
    fill(255,0,0);
    stroke(0,0,0);
    rotate(-45)
    rect(0,0,100,100);
    pop();


    push();
    translate (150,150)
    rotate(30)
    fill(0,255,255);
    stroke(0,0,0);
    rect(0,0,100,100);
    pop();

   

    // array mapping methods

    // method 1 - for loop

     //let femaleAges = []
    //[0,0,13,10....]
    // for(let i=0; i<cleanedData.length; i++){
    //     //console.log(i);
    //     femaleAges.push(cleanedData[i].Female)
    //     console.log(femaleAges);
    // }

    // Method 2 - foreach method
    // cleanedData.forEach(
    //     function(row){
    //         femaleAges.push(row.Female)
    //     }
    // )
    

    // Method 2A - arrow function
    // cleanedData.forEach(
    //     row => {femaleAges.push(row.Female)}   
    // );


    // Method 3
    let femaleScores = cleanedData.map(row => row.Female) 
    let ageGroups = cleanedData.map(row => row.Age_Group) 

    
    // Filter method
    //let filteredFemaleAges = femaleAges.filter(number => number > 3) 

    // console.log(femaleAges)
    console.log(femaleScores)
    console.log(ageGroups)


}

        
    

function cleanData(){
for(let i=0; i<data.rows.length; i++){
    // push to array
    cleanedData.push(data.rows[i].obj);
    }

    for(let i=0; i<cleanedData.length; i++){
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
}