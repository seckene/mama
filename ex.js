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

 