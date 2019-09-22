jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

});

var modal = document.getElementById("modal");
var image = document.getElementById("image");
var caption = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

function onClick(img) {
    modal.style.display = "block";
    image.src = img.src;
    caption.innerHTML = img.alt
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}