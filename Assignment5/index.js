console.log("worlking");

const a = document.getElementsByClassName("box");
console.log(a);

function changeDirection(){
    const try1 = document.getElementsByClassName("box-container");
    try1[0].style.flexDirection = "column";
    console.log(try1);
}