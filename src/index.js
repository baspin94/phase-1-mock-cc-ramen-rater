// write your code here
document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => {
        ramenData.forEach(ramen => buildRamen(ramen));
        const firstRamen = ramenData[0]
        renderRamen(firstRamen);
    })});

//Existing HTML Elements
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const detailImage = document.querySelector("img.detail-image");
const nameHeading = document.querySelector("h2.name");
const restHeading = document.querySelector("h3.restaurant");
const ratingSpan = document.querySelector("#rating-display");
const commentPar = document.querySelector("#comment-display");

function buildRamen(ramenObject) {
    //image - rendered in menu on page load
    const menuImage = document.createElement("img");
    menuImage.src = ramenObject.image;
    menuImage.alt = ramenObject.name;
    ramenMenu.append(menuImage);
  
    //add event listener for menu click
    menuImage.addEventListener("click", () => {
        renderRamen(ramenObject);
    }
)};

function renderRamen(ramenObject){
    detailImage.src = ramenObject.image;
    nameHeading.textContent = ramenObject.name;
    restHeading.textContent = ramenObject.restaurant;
    ratingSpan.textContent = ramenObject.rating;
    commentPar.textContent = ramenObject.comment;
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
});


