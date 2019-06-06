//søgefunktion
// definerer en funktion - parentes henviser til værdi
function searchFunction() {
    //definerer variabler
    let input, filter, ul, li, a, i, txtValue;
    //giver variabler værdier fra html ved hjælp af operator
    //searchInput - selve blok med søgning
    input = document.getElementById("searchInput");
    //se event i html
    filter = input.value.toUpperCase();
    //filter=indtastet værdi i input
    ul = document.getElementById("searchUL");
    li = ul.getElementsByTagName("li");
    // starter et loop i++ er code run after each loop
    for (i = 0; i < li.length; i++) {
        //med variablen a
        a = li[i].getElementsByTagName("a")[0];
        // giver variablen en værdi content eller inner
        txtValue = a.textContent || a.innerText;
        //Hvis txtvalue a matcher filter som er input
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            //hvis ikke vises intet
        } else {
            li[i].style.display = "none";
            
        }
    }
}

/* søg overlay */
//definerer funktion 'on' der henviser til event i html
function on() {
    document.getElementById("searchoverlay").style.display = "block";
}
//definerer funktion 'off' der henviser til event i html
function off() {
    document.getElementById("searchoverlay").style.display = "none";
}

/* FORSIDE */
//Loop funktion for automatisk skift
//Definerer variabel og giver den en værdi
let myIndex = 0;
//Kalder funktionen i html dokument
slideshow();

function slideshow() {
  //kan bruge i igen fordi let er brugt og ikke 'var' som er ud over blockscope
    let i;
    let x = document.getElementsByClassName("mySlides");
  //definerer loop 
    /*initilizacing (gør klar til brug' ;  condition, så længe i er mindre end længden på x( my slides' vil loopet kører, ; i++ sker efter være iteration øger vi med 1 */ 
    for (i = 0; i < x.length; i++) {
    //bruger loop på koden herunder.
        //x bruger i, som er lig med 0 (defineret i vores loop'. 
        x[i].style.display = "none";  
  }
    
    //my index +1
    myIndex++;
  /*Så hvis længden på x( my slides ' er mindre end myIndex, går den tilbage til myindex som vi har sat til at være 1*/ 
    if (myIndex > x.length) {myIndex = 1};
    /*og herefter siger vi så at den skal vis med style.display =block, hvor myindex -1. display block betyder at den viser vores index 1-1 når vores if statement er true. altså går den tilbage og viser vores først billede. 
    '*/ 
    x[myIndex-1].style.display = "block";
    
    
    // Change image every 5 seconds
  setTimeout(slideshow, 5000); 
}


//definerer ny variabel og giver den værdi 1
let slideIndex = 1;
showSlides(slideIndex);

//Klik på pil til næste billede n måske 0
//event i html - onclick 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//  gør at når man bruger knapperne, så bliver man det slide og så starter timeren forfra fra det slide man er på. 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*definerer Funktionen showslides, og giver den værdien n - bruges til at skift billede*/
function showSlides(n) {
/*kan bruge i igen fordi let er brugt og ikke 'var'. let er block scoped og bruges i den funktion den skrives i.*/ 
  let i;
  let slides = document.getElementsByClassName("mySlides");  
    
/*Så hvis længden på slides( my slides ' er mindre end n, går den tilbage til slideindex som vi har sat til at være på billed 1*/ 
  if (n > slides.length) {
      slideIndex = 1}   
    /*hvis n er større end 1 så går den tilbage, så må det betyde at vi går tilbage til forrige billede.*/ 
  if (n < 1) {
      slideIndex = slides.length}
    
    /*initilizacing (gør klar til brug' ;  condition, så længe i er mindre end længden på slides( my slides' vil loopet kører, ; i++ sker efter være iteration øger vi med 1 */ 
   for (i = 0; i < slides.length; i++) {
       //bruger loop på koden herunder.
        //slides bruger i, som er lig med 0 (defineret i vores loop'. 
      slides[i].style.display = "none";
  }
    
    /*og herefter siger vi så at den skal vis med style.display =block, hvor slideIndex -1. display block betyder at den viser vores index 1-1 når vores if statement er true. altså går den tilbage og viser vores først billede. 
    '*/ 
  slides[slideIndex-1].style.display = "block";  
}




/* TOPNAV */
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

