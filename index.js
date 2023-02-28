const colors=["green", "red","rgba(123,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
const randomnumber =random_number();
console.log(random_number());
document.body.style.backgroundColor = colors[randomnumber];
color.textContent = colors[randomnumber];

})
function random_number(){
    return parseInt(Math.random()*colors.length)
}