$(document).ready(function() {

    var observ = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {

            // Your code here for each observed entry
            if (entry.isIntersecting) {
                // The element is currently in the viewport

                $("#panel").slideDown(1000);
                $("#panel1").slideDown(1500);
                $("#panel2").slideDown(1500);
                $("#panel3").slideDown(2000);
                updateCounter();
                updateCounter1();
                updateCounter2();
                updateCounter3();
   
            } else {
                $("#panel").hide();
                $("#panel1").hide();
                $("#panel2").hide();
                $("#panel3").hide();
            }
        });
    });
    var tar = document.querySelector('#Inumbres');

    observ.observe(tar);
});


// ----------------------------------
$(document).ready(function() {
    var tart = document.querySelector('#divsndl');
    const div1 = document.getElementById('divsndl')
    var observt = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {

            // Your code here for each observed entry
            if (entry.isIntersecting) {
                // The element is currently in the viewport
                $("#divsndl").addClass("translate-y-2");

                // div1.classList.add("translate-y-2");
                // div1.classList.add("opacity-100");



            }
        });
    });

    observt.observe(tart);
    // Assuming you want to add the class when an event occurs, like a button click

});







// ---------------------------------------------------
// const grid2 = document.getElementById("grid2");
// const grid1 = document.getElementById("divsndl");


// const options = {
//     threshold: 1
// };
// const obsever = new IntersectionObserver((entries, obsever) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//              grid1.classList.add("opacity-100");
            // grid1.classList.remove("opacity-0");
            //  grid2.classList.add("opacity-100");
            // grid2.classList.remove("opacity-0");

            // grid3.classList.add("opacity-100");
            // grid3.classList.remove("opacity-0");

            // grid4.classList.add("opacity-100");
            // grid4.classList.remove("opacity-0");

            //  updateCounter();
            //  updateCounter1();
            //  updateCounter2();
            // updateCounter3();





//             obsever.unobserve(entry.target);
//         }
//     });
// }, options);
// obsever.observe(grid1);

// obsever.observe(grid2);
// obsever.observe(grid3);
// obsever.observe(grid4);
//splide.mount();
// -------------------------------------------------


// ---------------------------------------------

const targetNumber = 120; // الرقم الذي تريد التوقف عنده 
let currentNumber = 0;
const counterElement = document.getElementById("profAcount");


function updateCounter() {
    if (currentNumber < targetNumber) {
        currentNumber++;
        counterElement.textContent = currentNumber;
        setTimeout(updateCounter, 70); // تحديد الفاصل الزمني بين الأرقام بالميلي ثانية
    }

}
 updateCounter();
// ----------------------------------------------

const targetNumber1 = 1200;

let currentNumber1 = 0;
const counterElement1 = document.getElementById("prepStdAcount");

function updateCounter1() {
    if (currentNumber1 < targetNumber1) {
        currentNumber1++;
        counterElement1.textContent = currentNumber1;
        setTimeout(updateCounter1,1); // تحديد الفاصل الزمني بين الأرقام بالميلي ثانية
    }

}

// // تنفيذ الدالة لبدء العداد

// -------------------------------------------------------------
const targetNumber2 = 500;
let currentNumber2 = 0;
const counterElement2 = document.getElementById("mastreAcount");

function updateCounter2() {
    if (currentNumber2 < targetNumber2) {
        currentNumber2++;
        counterElement2.textContent = currentNumber2;
        setTimeout(updateCounter2, 2); // تحديد الفاصل الزمني بين الأرقام بالميلي ثانية
    }

}
//  ---------------------------------------------------
const targetNumber3 = 30;
let currentNumber3 = 0;
const counterElement3 = document.getElementById("doctrAcount");

function updateCounter3() {
    if (currentNumber3 < targetNumber3) {
        currentNumber3++;
        counterElement3.textContent = currentNumber3;
        setTimeout(updateCounter3, 80); // تحديد الفاصل الزمني بين الأرقام بالميلي ثانية
    }

}