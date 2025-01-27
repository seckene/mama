const reserv =document.querySelector("#btn2");
const font = document.querySelector(".font");
const btn34 =document.querySelector("#btn34");
console.log(btn34);
console.log(font);
console.log(reserv);
reserv.addEventListener("click",()=>{
font.style.visibility="visible";

});


btn34.addEventListener("click",()=>{

font.style.visibility="hidden";

    });


  const cash = document.querySelector(".cash");
  console.log(cash);
  window.addEventListener("mousemove",(e) =>{
cash.style.left= e.pageX +"px";
cash.style.top= e.pageY +"px";
  });

  const inp=document.querySelector(".font2");
  console.log(inp);
 const lettre =document.querySelector("a");
console.log(lettre);
const svg=document.querySelector("svg");
console.log(svg);

svg.addEventListener("click",() =>{
lettre.style.visibility="visible";
inp.style.zIndex = "1";
inp.style.visibility="visible";
})