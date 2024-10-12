// var splide = new Splide('.splide', {
//     type: 'loop',
//     perPage: 1,
//     padding: '6rem',
//     // updateHeightRatio,
//     heightRatio: 0.4,
//     focus: 'center',
//     autoplay: 'play',
//     //autoWidth: true,



// });

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        height:'22rem',
        autoWidth : true,
        perPage:4,
        focus: 'center',
        omitEnd:true,
        autoplay: 'play',
        
        
    });
    // Initialize the Splide instance
    splide.mount();
   // Update heightRatio based on screen size
    // function updateHeightRatio() {
    //     if (window.innerWidth < 768) {
    //         splide.options.heightRatio = 0.8; // Adjust as needed    
            

    //     } else {
    //         splide.options.heightRatio = 0.8; // Default height ratio

    //     } 
    //     // Update the Splide instance
    //     splide.refresh();
    // }

    // Call the function initially and listen for window resize events
    // updateHeightRatio();
    // window.addEventListener('resize', updateHeightRatio);
});