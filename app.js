const images = ["1.png", "2.JPG", "3.JPEG", "4.JPG", "5.jpeg"];
const targetImage = document.querySelector(".photo");
let i = 1;

targetImage.addEventListener("click", () => {

    targetImage.style.opacity = "0";

    setTimeout(() => {

        if(i === images.length -1) {
        i = 0;
        }

        targetImage.src = "images/" + images[i];
        i++; 

        targetImage.style.opacity = "1";

    }, 500);

   
});