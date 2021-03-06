// targetting/selecting the ID and classes 
// later i will make this variables do stuff by selecting them with funcs or events
let container = document.querySelector('.container');
let seats = document.querySelectorAll('.row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSelect = document.getElementById('movie');
populateUi();

// targetting and grabbing the value per ticket
let ticketPrice = +movieSelect.value;
// update total and movie count ///
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

/////////////////////////////////////Functions section//////////////////////////////



//Functions to Update total and Count
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    // pay atte, the spacing above, insde the parenthesis .row should b stand alne spaced from seat

    // three ... is the spread operator to pass the values of an Array straight
    let seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    });
    //  within the same function include the selected count and display of price and selected seats 

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    let selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount; //innerText changes either text or number
    total.innerText = selectedSeatsCount * ticketPrice;
}

//function to get data from local storage and populate UI
function populateUi() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }

        })
    }
    let selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}
///////////////////////////////////////// event listeners section///////////////////////

// event listener    Movie Select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount(); //calling the function at the end 

})

//  event listener Seat Select

container.addEventListener('click', e => {
    //element that is clicked on (checking if has the class of seat)
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
        //checking that it doesnt have the class of occupied if not assign it when clicked
    ) {
        e.target.classList.toggle('selected'); //adding the class selected to occupy the seat
        updateSelectedCount(); //calling the function at the end 
    }
});
//initial count and total 
updateSelectedCount();