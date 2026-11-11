const myImg = document.querySelector("img");

myImg.addEventListener("click", function() {
    const mySrc = myImg.getAttribute("src");
    if(mySrc === "./images/1258033884507930664.webp") {
        myImg.setAttribute("src", "./images/bro.png");
    }
    else {
        myImg.setAttribute("src", "./images/1258033884507930664.webp");
    }
});