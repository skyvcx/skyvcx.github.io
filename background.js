
const images = [ "0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];


const chosenImage = images[Math.floor(Math.random()*images.length)]
const chosenImage2 = images[Math.floor(Math.random()*images.length)]



const obj = document.getElementById("back");

if(chosenImage === chosenImage2){
    background();
} else {
    obj.style.backgroundImage = 'url(img/'+ chosenImage + ')';
}

function background(){
    obj.style.backgroundImage = 'url(img/'+ chosenImage + ')';
}