
let barButton=document.querySelector('.bars');
let headerUl=document.querySelector('header ul');
let closebar=document.querySelector(".closebar");

barButton.onclick=()=>{
    headerUl.style.left="0";
    closebar.style.display="block";
    barButton.style.display="none";
}

closebar.onclick=()=>{
    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";
}


let answera=document.querySelector('.answera');
let answerb=document.querySelector('.answerb');
let answerc=document.querySelector('.answerc');
let answerd=document.querySelector('.answerd');
let answere=document.querySelector('.answere');
let answerf=document.querySelector('.answerf');

let showa=document.querySelector('#showa');
let showb=document.querySelector('#showb');
let showc=document.querySelector('#showc');
let showd=document.querySelector('#showd');
let showe=document.querySelector('#showe');
let showf=document.querySelector('#showf');
// let prev=document.querySelector('#prev');

showa.onclick=()=>{
    answera.style.display="block";
    showa.style.display="none"
 
    // console.log('next');
}

showb.onclick=()=>{
  answerb.style.display="block";
  showb.style.display="none"

  // console.log('next');
}


showc.onclick=()=>{
  answerc.style.display="block";
  showc.style.display="none"

  // console.log('next');
}

showd.onclick=()=>{
  answerd.style.display="block";
  showd.style.display="none"

  // console.log('next');
}

showe.onclick=()=>{
  answere.style.display="block";
  showe.style.display="none"

  // console.log('next');
}

showf.onclick=()=>{
  answerf.style.display="block";
  showf.style.display="none"

  // console.log('next');
}


// prev.onclick=()=>{
//     answera.style.zIndex="3";
//     answerb.style.zIndex="1";
//     answerc.style.zIndex="2";

//     answera.style.transform="rotate(0deg)";
//     answerb.style.transform="rotate(15deg)";
//     answerc.style.transform="rotate(-15deg)";
 

//     console.log('prev');
// }


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
//  // showSlides( n);
// }


// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("author-container");
//   //  let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}   // [1]
//     if (n < 1) {slideIndex = slides.length}   //[3]
//     if (n == 0 ) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//      // slides[i].style.display = "none";  
//     }
   
//     // slides[slideIndex].style.transform = "rotate(15deg)"; 
//     // slides[slideIndex].style.zIndex="3";
//     slides[slideIndex-1].style.transform = "rotate(0deg)";
//     slides[slideIndex-1].style.zIndex="3";
//     slides[slideIndex].style.transform = "rotate(15deg)";
//     slides[slideIndex].style.zIndex="2"; 
//     slides[slideIndex+1].style.transform = "rotate(-15deg)";
//     slides[slideIndex+1].style.zIndex="1"; 
//  //  slides[slideIndex++].style.transform = "rotate(15deg)";  
//     console.log(slideIndex,"slideIndex");
//     console.log(slideIndex-1,"slideIndex=1")
//     console.log(slideIndex+1,"slideIndex+1")
   
//   }




// let transitiona=document.querySelector('#transitiona');
// let transitionb=document.querySelector('#transitionb');
// let transitionc=document.querySelector('#transitionc');

// let next=document.querySelector('#next');
// let prev=document.querySelector('#prev');

// next.onclick=()=>{
//     transitiona.style.zIndex="1";
//     transitionb.style.zIndex="3";
//     transitionc.style.zIndex="1";

//     transitiona.style.transform="rotate(15deg)";
//     transitionb.style.transform="rotate(-15deg)";
//     transitionc.style.transform="rotate(0deg)";
 
//     console.log('next');
// }


// prev.onclick=()=>{
//     transitiona.style.zIndex="3";
//     transitionb.style.zIndex="1";
//     transitionc.style.zIndex="2";

//     transitiona.style.transform="rotate(0deg)";
//     transitionb.style.transform="rotate(15deg)";
//     transitionc.style.transform="rotate(-15deg)";
 

//     console.log('prev');
// }


// let darkmode=document.querySelector('.darkmode');
// let body=document.querySelector('body');
// let header=document.querySelector('header');
// let headerli=document.querySelector('header ul li a');
// let box1=document.querySelector('.box1');
// let box2=document.querySelector('.box2');
// let team_container=document.querySelector('.team-container');
// let team_card=document.querySelector('.team-card');

// let faq_container=document.querySelector('.faq-container');
// let partner_container=document.querySelector('.partner-container');
// let footer_container=document.querySelector('.footer-container');



// darkmode.onclick=()=>{
//     console.log("white")
//    body.style.backgroundColor="white";

//    headerUl.style.backgroundColor="white";
//    headerUl.style.color="black";
//    headerli.style.color="black";

//    header.style.backgroundColor="white";
//    header.style.color="black";

//    closebar.style.backgroundColor="white";
//    barButton.style.backgroundColor="black";

//    box1.style.backgroundColor="#EFE9FF";
//    box1.style.color="black";

//    box2.style.backgroundColor="none";
//    box2.style.backgroundImage="url('../images/penguinwhite.png')";
//    box2.style.backgroundBlendMode="none";
//    box2.style.color="black";

//    team_container.style.backgroundColor="#EFE9FF";
//    team_container.style.color="black";
//    team_container.style.backgroundColor="#D9D9D9";

// }



let homebutton=document.querySelector(".homelink");

function closethebar(){
    let barButton=document.querySelector('.bars');
    let headerUl=document.querySelector('header ul');
    let closebar=document.querySelector(".closebar");

    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";

  //  console.log('close');
}
