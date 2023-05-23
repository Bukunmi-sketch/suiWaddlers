/* Slider (work in progress)
 * 03/09/2015 by Andrew Errico
 */
$(function() {

    // slider type
    $t = "partner-card"; // opitions are fade and slide
    
    //variables
    $f = 500,  // fade in/out speed
    $s = 500,  // slide transition speed (for sliding carousel)
    $d = 5000;  // duration per slide
    
    $n = $('.partner-card').length; //number of slides
    $w = $('.partner-card').width(); // slide width
    $c = $('.partner-container').width(); // container width
     $ss = $n * $w; // slideshow width
  
    
      function timer() {
        $('.timer').animate({"width":$w}, $d);
        $('.timer').animate({"width":0}, 0);
    }
  
  
  // fading function
    function fadeInOut() {
      timer();
        $i = 0;    
        var setCSS = {
            'position' : 'absolute',
            'top' : '0',
            'left' : '0'
        }        
        
        // $('.partner-card').css(setCSS);
        
        //show first item
        $('.partner-card').eq($i).show();
        
  
        setInterval(function() {
          timer();
            $('.partner-card').eq($i).fadeOut($f);
            if ($i == $n - 1) {
                $i = 0;
            } else {
                $i++;
            }
            $('.partner-card').eq($i).fadeIn($f, function() {
                $('.timer').css({'width' : '0'});
            });
  
        }, $d);
        
    }
    
    function slide() {
      timer();
        var setSlideCSS = {
            'float' : 'left',
            'display' : 'inline-flex',
            'width' : $c
        }
        var setSlideShowCSS = {
            'width' : $ss // set width of slideshow container
        }
        $('.partner-card').css(setSlideCSS);
        $('.partner-wrapper').css(setSlideShowCSS); 
        
        
        setInterval(function() {
            timer();
            $('.partner-wrapper').animate({"left": -$w}, $s, function(){
                // to create infinite loop
                $('.partner-wrapper').css('left',0).append( $('.partner-card:first'));
            });
        }, $d);
        
    }
    
    if ($t == "fade") {
        fadeInOut();
        
    } if ($t == "partner-card") {
        slide();
        
    } else {
      
    }
  });