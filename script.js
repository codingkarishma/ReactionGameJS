(function startApp(){

let screen1=document.querySelector("#screen1");
console.log(screen1);
screen1.style.display="block";


let screen2a=document.querySelector("#screen2a");
console.log(screen2a);
screen2a.style.display="none";


let screen2b=document.querySelector("#screen2b");
console.log(screen2b);
screen2b.style.display="none";


let screen3=document.querySelector("#screen3");
console.log(screen3);
screen3.style.display="none";

let howManyPlayers=document.querySelector("#howManyPlayers");

console.log(howManyPlayers);

howManyPlayers.addEventListener("change",createTextInput);
})();


function createTextInput(){
    let howManyPlayers=document.querySelector("#howManyPlayers");

    let numberOfPlayers=howManyPlayers.selectedIndex;
    console.log(numberOfPlayers);

    howManyPlayers.style.display="none";

   let question=document.querySelector("#question");
   console.log(question)
   question.innerHTML= "Enter Names of Players";

   let docFrag=document.createDocumentFragment();

   let inputElement;
   let myButton;

   for (let i = 0; i < numberOfPlayers; i = i + 1) {

    let div=document.createElement("div");
    div.setAttribute("class","docs");
    inputElement = document.createElement("INPUT");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "nameInput");
    inputElement.setAttribute("id", "playerName" + i);
    inputElement.setAttribute("value", "Name of Player " + (i + 1));

    // inputElement.addEventListener("click",()=>{
    //     console.log(inputElement);
    //     this.value="";
    // }) 

    function clearValueOfInput(){
        this.value = "";
    }
    inputElement.addEventListener("click",clearValueOfInput )

    //More code to be added
     div.appendChild(inputElement);
     docFrag.appendChild(div);
    
   inputElement.style.marginBottom="1rem";
    //  let br=document.createElement("br");
    //  docFrag.appendChild(br);
    //  docFrag.appendChild(br);
    //  docFrag.appendChild(br);

}

   myButton=document.createElement("input");
   myButton.setAttribute("type","button");  
   myButton.setAttribute("value","Submit Names");  
   myButton.setAttribute("id","submitNAmes");
   
   docFrag.appendChild(myButton);
   let screen1=document.querySelector("#screen1");
   screen1.appendChild(docFrag);


   
   let nameInput=document.querySelectorAll(".docs>.nameInput");
   console.log(nameInput);
   myButton.addEventListener("click",()=>{storePlayers(numberOfPlayers)});



}


function storePlayers(numberOfPlayers){

    
   // localStorage.setItem(, "Tom");
   
  //let value=inputElement.value;


   //inputElement("onChange")

//    let names=[];
//    for(let i=0;i<nameInput.length;i++){
//      names.push(nameInput[i].value);
//    }
//    console.log(names);
   //localStorage.setItem("names",{names});


  //console.log(names);
  function Player(name){
    this.name=name;
  }
Player.prototype.setTime=function (bestTime,totalTime,numberOfRounds){
    this.bestTime=bestTime;
    this.averageTime=totalTime/numberOfRounds;
}



let i, players = [];

for (i = 0; i<numberOfPlayers; i++){
    players[i] = new Player(document.getElementById("playerName" + i).value);
}
  console.log(players);
 // console.log(new Player("nonu"));
createGame(players, 10);

   


}

//console.log(localStorage.getItem("names"));














