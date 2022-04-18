const a = document.getElementsByClassName("text");
console.log(a[0].innerText);

function changeText(){
  const try1 = document.getElementsByClassName("text");
  try1[0].innerText = "Welcome to Elevation academy";
  console.log(try1);
}