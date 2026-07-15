// ----------------------
// Floating Hearts
// ----------------------

createItems("❤️",40,"heart");

// ----------------------
// Twinkling Stars
// ----------------------

createItems("✨",10,"star");

// ----------------------
// Floating Balloons
// ----------------------

createItems("🎈",8,"balloon");

function createItems(icon,count,className){

for(let i=0;i<count;i++){

let item=document.createElement("div");

item.className=className;

item.innerHTML=icon;

item.style.left=Math.random()*100+"vw";

item.style.fontSize=(15+Math.random()*25)+"px";

item.style.animationDuration=(6+Math.random()*8)+"s";

item.style.animationDelay=Math.random()*8+"s";

document.body.appendChild(item);

}

}

// ----------------------
// Moving NO Button
// ----------------------

let no=document.getElementById("no");

no.addEventListener("mouseover",function(){

let x=Math.random()*250-125;

let y=Math.random()*150-75;

no.style.transform=`translate(${x}px,${y}px)`;

});

// ----------------------
// YES Button
// ----------------------

document.getElementById("yes").onclick=function(){

document.getElementById("success").style.display="block";

setTimeout(()=>{

window.location.href="https://wa.me/61420599795?text=Yes ❤️ I would love to see you tomorrow after work";

},1500);

};
