
//Grabbing the elements
const ratingEl = document.querySelectorAll('.card__rating');
const submitEl = document.querySelector('.card__submit');
const thanksCard = document.querySelector('.thanks');
const ratingCard = document.querySelector('.card-rating');
const ratings = document.querySelectorAll('.card__rating');
const result = document.getElementById('result');








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

    ratingCard.style.display ='none';

    thanksCard.style.display = 'block';

    ratings.forEach(rating => {
        if(rating.classList.contains('active')){
            result.innerHTML = `You Selected ${rating.innerHTML} out of 5`
    
        }
        
    });


})