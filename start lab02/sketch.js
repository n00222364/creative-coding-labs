let friend01 = {name: "David", age:46, bowling:true};
let friend02 = {name:"Peter", age:29, bowling:false};
let friend03 = {name:"Paul", age:24, bowling:false};
let friend04 = {name:"Mark", age:36, bowling:false};
let friend05 = {name:"Colm", age:41, bowling:true};

let friends = [];
let friendAges = [];
let friendBowlingAges = [];

friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);


for(let index=0; index<5; index++){
    friendAges.push(friends[index].age)

}

for(let index=0; index<5; index++){
  if (friends[index].bowling == true){
    friendBowlingAges.push(friends[index].age)
  }

}
    

function calcAvg(arrayNums){   
    let start = 0;

    for(let i=0; i<arrayNums.length; i++){
        
       start = start + arrayNums[i]
    }

       return start/arrayNums.length;
}

// for(let i=0; i<100; i++){
//     if (i%5==0)(console.log(i));
// }

function median(arrayNums){
    friendAges.sort((a,b) => (a-b))
    
    if (arrayNums.length%2 == 0){
        let endNum = arrayNums.length/2
        let startNum = endNum - 1

        return (arrayNums[startNum] + arrayNums [endNum])/2; 

    } else {
       return arrayNums[Math.floor(arrayNums.length/2)];
    }

}