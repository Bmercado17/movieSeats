// targetting/selecting the ID and classes 
let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSelect = document.getElementById('movie');

// targetting and grabbing the value per ticket
let ticketPrice = +movieSelect.value;

//Functions section
//Functions to Update total and Count
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    // pay atte, the spacing above insde the parenthesis ,row should b stand alne
    let selectedSeatsCount = selectedSeats.length;


    count.innerText = selectedSeatsCount; //innerText changes either text or number
    total.innerText = selectedSeatsCount * ticketPrice;
}
// event listeners section
// event listener Movie Select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;

})

//  event listener Seat Select

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})