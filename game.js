var num=6;
var color=genCol(num);
var head=document.getElementById("tit");
var sqs=document.getElementsByClassName("square");
var answer=document.getElementById("col");
var heading=document.getElementById("tit");
var newGame=document.getElementById("newButt");
var easy=document.getElementById("easyButt");
var hard=document.getElementById("hardButt");
var rel=document.getElementById("result");
var selected=pickedCol();
answer.innerHTML=selected;

function easyclick(){
    easy.classList.add("select");
    hard.classList.remove("select");
    num=3;
    newclick();
}

function hardclick(){
    hard.classList.add("select");
    easy.classList.remove("select");
    num=6;
    newclick();
}

function newclick(){
    color=genCol(num);
    if(num==3){
        for(var j=3;j<6;j++){
            sqs[j].style.display="none";
        }
    }else{
        for(var j=3;j<6;j++){
            sqs[j].style.display="initial";
        }
    }
    selected=pickedCol();
    answer.innerHTML=selected;
    head.style.background="#3498db";
    newGame.innerHTML="New Game";
    for(var i=0;i<sqs.length;i++){
        sqs[i].style.background=color[i];
    }
}



for(var i=0;i<sqs.length;i++){
    sqs[i].style.background=color[i];
    sqs[i].addEventListener("click",function(){
        var clicked= this.style.background;
        if(clicked===selected){
            rel.innerHTML="Correct!";
            newGame.innerHTML="Play Again?";
            changeCol(clicked);
        }else{
            rel.innerHTML="Try again!"
        }
    });
}

function changeCol(color){
    for(var i=0;i<sqs.length;i++){
        sqs[i].style.background=color;
        heading.style.background=color;
    }

}

function genCol(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(rendCol());
    }
    return arr;
}


function pickedCol(){
    return color[rend(color.length)]
}


function rend (num){
    return Math.floor(Math.random()*num);
}

function rendCol(){
    var r= rend (256);
    var g= rend (256);
    var b= rend (256);
    return "rgb"+"("+r+", "+g+", "+b+")";
}

