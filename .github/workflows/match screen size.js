// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "green";
//     } else {
//      document.body.style.backgroundColor = "yellow";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 768px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes

const mediaScreen = (x)=>{
    if (x.matches){
        document.body.style.backgroundColor='green';
    }else{
        document.body.style.backgroundColor='darkred';
    }
}
const x = window.matchMedia("(max-width: 768px)");
mediaScreen(x);
x.addListener(mediaScreen);