const colors=["0", "1","2","3","F","4","5","6","7","8","8","D","9","A","B","C","D","E"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
let randomnumber ="#";
for(let i =0;i< 6;i++){
    randomnumber +=colors[random_number()];
}
console.log(random_number());
console.log(randomnumber);

document.body.style.backgroundColor = randomnumber;
color.textContent = randomnumber;
})
function random_number(){
    return parseInt(Math.random()*colors.length)
}