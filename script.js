//this is the object that will have all the images

const boxes = [
    "box1",
    "box2",
    "box3",
    "box4",
    "box5",
    "box6",
    "box7",
    "box8",
    "box9",
    "box10",
    "box11",
    "box12",
    "box13",
    "box14",
    "box15",
    "box16",
    "box17",
    "box18",
    "box19",
    "box20",
    "box21",
    "box22",
    "box23",
    "box24",
    "box25",
    "box26",
    "box27",
    "box28",
    "box29",
    "box30",
    "box31",
    "box32",
    "box33",
    "box34",
    "box35",
    "box36",
    "box37",
    "box38",
    "box39",
    "box40",
    "box41",
    "box42",
    "box43",
    "box44",
    "box45",
    "box46",
    "box47",
    "box48",
    "box49",
    "box50",
    "box51",
    "box52",
    "box53",
    "box54",
    "box55",
    "box56",
    "box57",
    "box58",
    "box59",
    "box60",
    "box61"
    ];

let rightOnes = [];
let gameBoxes = [];
let wrongOnes = [];
let idElement ="";

    //function to generate the random number
    function generateRandom(maxLimit = 20){
      let rand = Math.random() * maxLimit;
      rand = Math.floor(rand);
      //this line prevents the zero value
      if (rand == 0){generateRandom(maxLimit = 20);}
      return rand;
    }; 
    
   
 
    
    //function to get the right 5 boxes and display them
    function gettingRightOnes (){
      let random = 0
      for (let i=0; i<5; i++){
       random = Math.floor(Math.random() * boxes.length);
        while(rightOnes.includes(boxes[random])){
          random = Math.floor(Math.random() * boxes.length);
        }
        rightOnes.push(boxes[random]);
      }
      for (let j=0; j < rightOnes.length; j++){
        document.getElementById(rightOnes[j]).style.display = "block";
    }
    }

    //function addes the first 5 boxes to another 15 boxes
    function gettingBoxes(){
     gameBoxes = [...rightOnes]; 
        let random = 0
      for (let i=0; i<15; i++){
       random = Math.floor(Math.random() * boxes.length);
        while(gameBoxes.includes(boxes[random])){
          random = Math.floor(Math.random() * boxes.length);
        }
        gameBoxes.push(boxes[random]);
      }
      for (let j=0; j < gameBoxes.length; j++){
        document.getElementById(gameBoxes[j]).style.display = "block";
        document.getElementById(gameBoxes[j]).disabled = false;
    }
    document.getElementById("startButton").style.display = "none";
    document.getElementById("message").innerHTML="Juego de Memoria"
    }
    

    //get all the button elements
    const buttons = document.getElementsByTagName("button");
    //captures the Id of the elements
    const buttonPressed = e => { 
      idElement = e.target.id;
      return console.log(idElement);
      }
     //links the function to all the buttons 
    for (let button of buttons) {
      button.addEventListener("click", buttonPressed);
      button.addEventListener("click", gameChecker);
      }

    
    function gameChecker(){
      if (idElement == "loadButton" || idElement =="startButton"){
        return;
      }
     if (wrongOnes.length < 4){
        if (!rightOnes.includes(idElement)){
          wrongOnes.push(idElement);
          document.getElementById(idElement).style.display = "none";
          let attemptsLeft = 5 - wrongOnes.length;
          alert("Incorrecto te que dan " + attemptsLeft + " intentos");  
        } else {
          if (rightOnes.length > 1) {
          let indexElement = rightOnes.indexOf(idElement);  
          rightOnes.splice(indexElement,1);
          document.getElementById(idElement).style.display = "none";
          alert("Correcto te quedan " + rightOnes.length + " elementos por descubrir" )
          } else {
            alert("Felizidades Ganaste el Juego")
            window.location.reload();
          }
        }
      } else {
        alert("Mala Suerte Perdiste");
        window.location.reload();
      }
    }
    
 
