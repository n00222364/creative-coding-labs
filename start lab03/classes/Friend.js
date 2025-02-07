// Step 1 Class example
// class Friend {

//     constructor(){
//        this.name = "Cal";
//        this.number = 769; 
//     }
// }

class Friend {

    constructor(_name, _number){
       this.name = _name;
       this.number = _number; 
    }

    report(){
        console.log(this.name,this.number)
    }
}