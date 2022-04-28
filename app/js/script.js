
//Grabbing the elements
const ratingEl = document.querySelectorAll('.card__rating');
const submitEl = document.querySelector('card__submit');





//rating implementation
ratingEl.forEach(element => {
    //adding active if clicked
    element.addEventListener('click', ()=>{
        ratingEl.forEach(element => element.classList.remove('active'));
        element.classList.add('active');

    })
});


//submit button flip

submitEl.addEventListener('click', ()=>{




})