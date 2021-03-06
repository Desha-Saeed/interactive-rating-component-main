//Grabbing the elements
const ratingEl = document.querySelectorAll(".card__rating");
const submitEl = document.querySelector(".card__submit");
const thanksCard = document.querySelector(".thanks-card");
const ratingCard = document.querySelector(".rating-card");
const ratings = document.querySelectorAll(".card__rating");
const result = document.getElementById("result");

//rating implementation
ratingEl.forEach((element) => {
  //adding active if clicked
  element.addEventListener("click", () => {
    ratingEl.forEach((element) => element.classList.remove("active"));
    element.classList.add("active");
  });
});

//submit button 

submitEl.addEventListener("click", () => {
  ratingCard.style.display = "none";

  thanksCard.style.display = "block";

  result.innerText = "Please give us a rating";


  //add the rating result
  ratings.forEach((rating) => {
    if (rating.classList.contains("active")) {
      result.innerText = `You selected ${rating.innerHTML} out of 5`;
    }
  });
});
