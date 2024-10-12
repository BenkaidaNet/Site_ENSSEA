$(document).ready(function() {
    var target0 = document.querySelector('#div_News1');
    var observer0 = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $("#div_News1").animate({
                    top: '0px'
                }, 1000);


            }
        });
    });
    observer0.observe(target0);

});

