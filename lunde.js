/* TOPNAV */
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

/* søg overlay */
function on() {
    document.getElementById("searchoverlay").style.display = "block";
}

function off() {
    document.getElementById("searchoverlay").style.display = "none";
}

//søgefunktion
// definerer en funktion
function searchFunction() {
    //definerer variabler
    let input, filter, ul, li, a, i, txtValue;
    //giver variabler værdier fra html ved hjælp af operator
    input = document.getElementById("searchInput");
    //se event i html
    filter = input.value.toUpperCase();
    //filter=indtastet værdi i input
    ul = document.getElementById("searchUL");
    li = ul.getElementsByTagName("li");
    // starter et loop
    for (i = 0; i < li.length; i++) {
        //med variablen a
        a = li[i].getElementsByTagName("a")[0];
        // giver variablen en værdi content eller inner
        txtValue = a.textContent || a.innerText;
        //hvis indt test passer vises matcher filter
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            //hvis ikke vises intet
        } else {
            li[i].style.display = "none";
            
        }
    }
}

//modal kalender
// Get the modal
let modal = document.getElementById("Modalkal");

// Åben modal knap
let btn = document.getElementById("myBtn");

// span element der lukker modal
let span = document.getElementsByClassName("close")[0];

// Når man klikker på knappen åbner modalen 
btn.onclick = function() {
  modal.style.display = "block";
}

// Når der trykkes på span elementet (x), lukker modalen
span.onclick = function() {
  modal.style.display = "none";
}

// Når der trykkes hvor som helst på siden lukkes modalen 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}