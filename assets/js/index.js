
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
