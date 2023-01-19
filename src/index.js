// write your code here
document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(function(ramenData) {
        ramenData.forEach(ramen => buildRamen(ramen));
        const firstRamen = ramenData[0]
        detailImage.src = firstRamen["image"];
        nameHeading.textContent = firstRamen["name"];
        restHeading.textContent = firstRamen["restaurant"];
        ratingSpan.textContent = firstRamen["rating"];
        commPar.textContent = firstRamen["comment"];
    })});

//Existing HTML Elements
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const detailImage = document.querySelector("img.detail-image");
const nameHeading = document.querySelector("h2.name");
const restHeading = document.querySelector("h3.restaurant");
const ratingSpan = document.querySelector("#rating-display");
const commPar = document.querySelector("#comment-display");

function buildRamen(ramenObject) {
    //image - rendered in menu on page load
    const menuImage = document.createElement("img");
    menuImage.src = ramenObject["image"];
    menuImage.alt = ramenObject["name"];
    ramenMenu.append(menuImage);
  
    //elements to render after click event

    //detail image
     
    //Ramen Name
    const ramenName = ramenObject["name"];

    //Restaurant Name
    const restaurant = ramenObject["restaurant"];

    //Rating
    const rating = ramenObject["rating"];

    //Comment
    const comment = ramenObject["comment"];

    //add event listener for menu click
    menuImage.addEventListener("click", function(){
        detailImage.src = ramenObject["image"];
        nameHeading.textContent = ramenName;
        restHeading.textContent = restaurant;
        ratingSpan.textContent = rating;
        commPar.textContent = comment;
    });
};

//Add 'submit' event listener to form
const form = document.querySelector("#new-ramen");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target.comment.value,
    }
    buildRamen(newRamen);
    form.reset();
})
