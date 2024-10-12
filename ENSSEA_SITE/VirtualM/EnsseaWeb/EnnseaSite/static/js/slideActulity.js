document.addEventListener('DOMContentLoaded', function () {
    var splide=new Splide( '.splide', {
        type       : 'loop',
        height     : '18rem',
        perPage    : 2,
        autoWidth : true,
        autoplay: 'play',
        breakpoints: {
          640: {
            height: '6rem',
          },
        },
      } );
    
      splide.mount()
    
    
    });
    