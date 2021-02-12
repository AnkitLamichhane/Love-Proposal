var tl;

const myFunc = () =>{
    var name = document.querySelector(".name").value;
    var greet = document.querySelector(".greet");

    greet.style.color="red";
    greet.style.fontSize="35px";
    greet.innerHTML=name;


    //gsap animation
     tl = gsap.timeline();

    //Removing background image
   tl.to(".heart",{x:1540,duration:5,ease:"bounce"},"+=0.5");

  //backToTop
  backToTop();
    //Creating I heart You
    tl.to(".horizontal1", {x: 100,duration:1,ease:"bounce"});
    tl.to(".horizontal2", {x: 100,opacity:1},"+=0.5");

    tl.to(".vertical1", {x: 145,y:-105,duration:2,ease:"bounce"},"+=0.5");
    //love
    tl.to(".heartBeat", {x: 130,y:-675,duration:1,ease:"bounce"},"+=0.5");

    // Y
    tl.to(".vertical2", {x: 110,y:-20,duration:2,ease:"elastic"},"+=0.5");
    tl.to(".vertical3", {x: 85,y:-100},"+=0.5");
    tl.to(".vertical4", {x: 98,y:-140},"+=0.5");


    //U
    tl.to(".horizontal3", {x: 176,y:-195,duration:2,ease:"elastic"},"+=0.5");
    tl.to(".vertical5", {x: 196,y:-295},"+=0.5");
    tl.to(".vertical6", {x: 244,y:-375},"+=0.5");
    //O

    tl.to(".box", {x: 135,y:-455,borderRadius:"50% 50%"},"+=0.5");

    tl.to(".greet", {x: 130,y:-555,duration:2,ease:"bounce"},"+=0.5");
}
const reverse = ()=>{
    tl.reverse();
}

const backToTop = () =>{
    //displaying back
    document.querySelector(".animeTool").style.display="block"
 //Moving animetool to top
 tl.to(".animeTool",{y:-540,duration:0.5},"+=0.5");
}
//check for enter key
const checkKey = (event)=>{
    if(event.keyCode ===13){
        let name = document.querySelector(".name").value;
        event.preventDefault();
        if(name !== "")
        myFunc();
    }
}

