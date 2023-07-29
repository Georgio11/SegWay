// Change prise

let creditBtns = document.querySelectorAll('.credit_btn');
let oldPrice = document.querySelector('.extend_old');
let newPrice = document.querySelector('.extend_new');

let allOldPrises = [1099.99, 1299.99, 1499.99];
let allNewPrises = [999.99, 1099.99, 1299.99];

oldPrice.innerHTML = `$${allOldPrises[0]}`;
newPrice.innerHTML = `$${allNewPrises[0]}`;

creditBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        creditBtns.forEach(btn => {
            btn.classList.remove('active');
        });
  
        this.classList.add('active');

        changePrise();
    });
});

 function changePrise() {
    let activeIndex = -1;
  
    creditBtns.forEach((btn, index) => {
        if (btn.classList.contains('active')) {
            activeIndex = index;
        }
    });
  
    if (activeIndex !== -1) {
        oldPrice.innerHTML = `$${allOldPrises[activeIndex]}`;
        newPrice.innerHTML = `$${allNewPrises[activeIndex]}`;
    }
}

// Change segways info

let allSegwaysNames = ['KS E22', 'KS ES1l', 'KS Air t15', 'KS F30', 'KS E45', 'KS MAX', 'KS MAX', 'KS ES2', 'KS ES 3', 'EKS ZING E8', 'EKS ZING E10', 'EKS ZING E12', 'KS ES 4', 'Accessories'];

let segwayBtns = document.querySelectorAll('.segway-choice_wrapper .swiper-slide');
let segwayImgs = document.querySelectorAll('.intro_img');
let headings = document.querySelectorAll('.intro_heading');


segwayBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        segwayBtns.forEach(btn => {
            btn.classList.remove('active');
        });
  
        this.classList.add('active');

        changeNames();
        changeImages(index);
    });
});


function changeNames() {
    let activeIndex = -1;
  
    segwayBtns.forEach((btn, index) => {
        if (btn.classList.contains('active')) {
            activeIndex = index;
        }
    });
  
    headings.forEach(heading => {
        if (activeIndex !== -1) {
            heading.innerHTML = `SEGWAY Ninebot ${allSegwaysNames[activeIndex]}`;
        }
    
        if (activeIndex == 13) {
            heading.innerHTML = `${allSegwaysNames[activeIndex]}`;
        }
    })
    
}

function changeImages(index) {
    let imagePath = `images/segways/${index + 1}.jpg`;
    segwayImgs.forEach(image => {
      image.src = imagePath;
    });
}

// Change advantage info

let advantageBtns = document.querySelectorAll('.advantage_btn');
let advantageList = document.querySelectorAll('.advantage_item');

advantageBtns.forEach((button, index) => {
    button.addEventListener('click', function() {
        advantageBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
      
        advantageList.forEach(block => {
            block.classList.remove('active');
        });
        advantageList[index].classList.add('active');
    });
});