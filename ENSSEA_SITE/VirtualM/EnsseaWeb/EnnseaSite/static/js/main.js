
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        focus: 'center',
        autoplay: 'play',
        });
    
    // Initialize the Splide instance
    splide.mount();
   // Update heightRatio based on screen size
    function updateHeightRatio() {
        if (window.innerHeight <= 601) {
            splide.options.heightRatio = 0.36; // Adjust as needed

            
            
        } else if(window.innerHeight <= 800) { 
           splide.options.heightRatio = 0.5; // Default height ratio

        }else{
            splide.options.heightRatio = 0.8;
        }
        
        // Update the Splide instance
        splide.refresh();
    }

    // Call the function initially and listen for window resize events
    updateHeightRatio();
    window.addEventListener('resize', updateHeightRatio);
});