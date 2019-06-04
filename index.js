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
    for (i = 0; i < x.length; i++) {
    //bruger loop på koden herunder
        x[i].style.display = "none";  
  }
    myIndex++;
  //hvis myIndex er længere end x, går den tilbage til 1
    if (myIndex > x.length) {myIndex = 1};
    x[myIndex-1].style.display = "block";
  setTimeout(slideshow, 5000); // Change image every 5 seconds
}
//definerer ny variabel og giver den værdi 1
let slideIndex = 1;
showSlides(slideIndex);

//Klik på pil til næste billede n måske 0
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//definerer Funktionen showslides, og giver den værdien n - bruges til at skift billede
function showSlides(n) {
//kan bruge i igen fordi let er brugt og ikke 'var' som er ud over blockscope
  let i;
  let slides = document.getElementsByClassName("mySlides");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
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

