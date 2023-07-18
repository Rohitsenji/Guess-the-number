
var initialvalue = 100; 
var highscore = null;
// let randomnumber=Math.trunc(Math.random()*100);
var randomnumber=generate(100);
console.log(randomnumber);

function generate(n){

    return Math.trunc(Math.random()*n)+1;

}
function reloadgame(){
    initialvalue=100;
    randomnumber = generate(100);
    console.log(randomnumber);
    document.getElementById('input-section').value="";
    // document.querySelector('.score').textContent=20
    document.querySelector('.startguessing').textContent="Start guessing..."
    document.body.style.backgroundColor="#94baf2";
    document.querySelector('.in-chances').innerHTML=initialvalue;
    document.querySelector('.number').textContent="?";
    
    document.querySelector('.oncheck').style.visibility="visible"
}

function check(){
   
    let a = document.getElementById("input-section").value;
    if(initialvalue!==0){
        if(a <randomnumber){
            document.querySelector(".startguessing").innerHTML="Your Guess is low 😧 Try again!! You can do it 🤗" 
            --initialvalue
         document.querySelector('.in-chances').textContent=initialvalue
        }
        else if(a > randomnumber){
            document.querySelector(".startguessing").innerHTML="Your Guess is high 🙂 Try again!!";
            --initialvalue
         document.querySelector('.in-chances').textContent=initialvalue
        }
        else{
            document.body.style.backgroundColor="#32fa5d";
            document.querySelector(".startguessing").textContent="Yippie You Won 😍😍";
            document.querySelector(".in-chances").textContent= --initialvalue;
            highscore= initialvalue
            document.querySelector(".in-highscore").textContent=highscore;
            // document.querySelector(".oncheck").style.visibility="hidden";
            document.querySelector(".num").textContent=randomnumber;
            // document.querySelector('.num').style.backgroundColor="red";
            // document.getElementById("number").innerText=randomnumber;
        }
    }
    else{
        
        document.querySelector(".startguessing").textContent="Game over Your score is zero ☹☹ Play Again";
       
    }
    
}