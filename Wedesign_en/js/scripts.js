
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function(){

document.getElementById("sliding-header-menu-outer").style.right = "0";

}

document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let aboutUsTabs = document.getElementsByClassName("single-tab");

for (var a = 0; a < aboutUsTabs.length; a++){
    aboutUsTabs[a].onclick = function(){
    let clickedValue = this.innerHTML; 
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue]; //z wybranej zakladki wyswietla nam sie opis

    for (var b = 0; b < aboutUsTabs.length; b++){
      aboutUsTabs[b].style["background-color"] = unseletectedColor;
      aboutUsTabs[b].style["font-weight"] = "normal";
    }
    this.style["background-color"] = seletectedColor;
    this.style["font-weight"] = "bold"

  }
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

let previousArror = document.getElementById("service-previous");
let nextArrow = document.getElementById("service-next");
let serviceTitle = document.getElementById("service-title");
let serviceText = document.getElementById("service-text");

let currenIndex = 0;

nextArrow.onclick = function(){
  if(currenIndex == (ourServices.length - 1)) //jeśli obecny index = 2 to zaczynamy od 0 w przeciwnym razie dodajemy kolejny
  {
    currenIndex = 0;
  } else{
    
    currenIndex +=1
  }
  let title = ourServices[currenIndex].title;
  let text = ourServices[currenIndex].text;
  serviceTitle.innerHTML = title;
  serviceText.innerHTML = text;
  console.log(currenIndex)
}
previousArror.onclick = function(){
  if(currenIndex == 0)
  {
    currenIndex = ourServices.length - 1; //jeśli obecny index = 0 to klikajac idziemy na koniec
    
  } else{
    
    currenIndex -=1
     
  }
  let title = ourServices[currenIndex].title;
  let text = ourServices[currenIndex].text;
  serviceTitle.innerHTML = title;
  serviceText.innerHTML = text;
  console.log(currenIndex)
}




// Footer



  
   


   