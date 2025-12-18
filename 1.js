var fullelems = document.querySelectorAll('.fullelems');
var closebtn = document.querySelectorAll('.closebtn');
var cardselem = document.querySelectorAll('.elem');
console.log(cardselem);
cardselem.forEach(function (card) {
    card.addEventListener('click', function () {
        fullelems[card.id].style.display = 'block';
    });
});
closebtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        fullelems[btn.id].style.display = 'none';
    });
});

var addtaskbtn = document.getElementById('addtaskbtn');
var form = document.querySelector('.taskadder form');
var input = document.querySelector('.Taskform input');
var taskdesc = document.querySelector('.Taskform textarea');
var impcheck = document.getElementById('impcheckbox');
var tasklist = document.querySelector('.addlist');
let todotask = [
    {
        task:'Mandir Jao',
        important:'true'
    },
    {
        task:'Mandir ao',
        important:'false'
    }
]
var sum = '';
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form submitted');
    // fullelems[3].style.display = 'none';
});
todotask.forEach(function(task){
    console.log(task)
    sum= sum+ `<div class="task">
                        <div class="taskdetails">
                            <h1>${task.task}</h1> <span class='impmarker ${task.important}'>imp</span>
                        </div>
                        <div id="controlsbutton">
                            <button id="Taskhandler" class="cbutton">Mark as completed</button>
                            <button id="Taskdeleter" class="cbutton">Delete</button>
                        </div>
                    </div>`
    tasklist.innerHTML = sum;
});
