/*
    function korrigiere(i) {
      const eingabe = document.getElementById('loesung' + i).value.trim();
      const korrektur = document.getElementById('korrektur' + i);
      if (eingabe === loesungen[i]) {
        korrektur.textContent = "Richtig!";
        korrektur.className = "korrektur richtig";
      } else {
        korrektur.textContent = "Falsch! Die richtige Lösung ist " + loesungen[i];
        korrektur.className = "korrektur falsch";
      }
    }

  */
 /* Rausgenommen muss ggf wieder rein
function erstelleVorschau() {
      allert(aufgabenart);
      const container = document.getElementById('AufgabeContainerVorschau');
       if (aufgabenart ="Einfach"){
        EinfacherText(container);}
        if (aufgabenart ="Drag"){
          DragDrop(container);}
}*/


/* CHAT methoden*/

function toggleChat() {
  var chat = document.getElementById('chatWidget');
  var toggleIcon = document.getElementById('toggleIcon');
  chat.classList.toggle('minimized');
  toggleIcon.innerText = chat.classList.contains('minimized') ? '+' : '−';
}

function sendMessage() {
  var input = document.getElementById('userInput');
  var message = input.value.trim();
  if (message) {
    var chatMessages = document.getElementById('chatMessages');
    var newMessage = document.createElement('div');
    newMessage.className = 'message user-message';
    newMessage.innerText = message;
    chatMessages.appendChild(newMessage);
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
  