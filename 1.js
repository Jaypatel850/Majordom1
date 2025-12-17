var fullelems = document.querySelectorAll('.fullelems');
var closebtn = document.querySelectorAll('.closebtn');
var cardselem = document.querySelectorAll('.elem');
console.log(cardselem);
cardselem.forEach(function(card) {
    card.addEventListener('click', function() {
        fullelems[card.id].style.display = 'block';
    });
});
