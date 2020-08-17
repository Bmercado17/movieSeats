// targetting/selecting the ID and classes 
let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSelect = document.getElementById('movie');

// targetting and grabbing the value 
let ticketPrice = +movieSelect.value;

//Functions
//Functions to Update total and Count
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row.seat.selected');
    console.log(selectedSeats)
}
// First event listener
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
    }
})