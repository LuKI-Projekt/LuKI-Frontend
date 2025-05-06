var aufgabenart = "";

function speicherAufgabenart(art){
    aufgabenart = art;
}

function zeigeDropdown() {
    const container = document.getElementById("dropdownContainer");
    container.classList.remove("versteckt");
    container.classList.add("sichtbar");
  }

  

function show (anything){
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    if (aufgabenart == "" || dropdown.classList.contains('active')) {
        dropdown.classList.toggle('active');
    }
}