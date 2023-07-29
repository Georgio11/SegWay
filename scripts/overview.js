let overviewBtns = document.querySelectorAll('.overview_list li');
let overviewCircles = document.querySelectorAll('.num');

overviewBtns.forEach((button, index) => {
    button.addEventListener('click', function() {
        overviewBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
      
        overviewCircles.forEach(block => {
            block.classList.remove('active');
        });
        overviewCircles[index].classList.add('active');
    });
});

let overviewFirst = document.querySelector('.first-overview_list');
let overviewSecond = document.querySelector('.second-overview_list');
let overviewFirstLi = document.querySelectorAll('.first-overview_list li');
let overviewSecondLi = document.querySelectorAll('.second-overview_list li');

let overviewSecondVal = overviewFirstLi.length + 1;

overviewSecond.setAttribute('start', overviewSecondVal);

let shadow = document.createElement('div');

function removeBlock() {
    if (window.innerWidth <= 1000) {
        overviewSecondLi.forEach(list => {
            overviewFirst.appendChild(list);
        })
        overviewFirst.appendChild(shadow);
    } else {
        overviewSecondLi.forEach(list => {
            overviewSecond.appendChild(list);
        })
    }
};

removeBlock();

function checkForWindowResize() {
    removeBlock()
};

window.addEventListener('resize', checkForWindowResize);

