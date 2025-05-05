
function DragDrop(container) {
    container.innerHTML = ''; // Container leeren, falls schon etwas drin ist
  
    for (let i = 0; i < aufgaben.length; i++) {
      // Erstelle das äußere Task-Div
      const taskContainer = document.createElement('div');
      taskContainer.className = 'task-container';
  
      const task = document.createElement('div');
      task.className = 'task';
      task.setAttribute('data-answer', loesungen[i]); // richtige Antwort aus dem Array
  
      task.innerHTML = `
  <div class="frage">${aufgaben[i]}</div>
  <div class="dropzoneDD" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
`;
  
      taskContainer.appendChild(task);
      container.appendChild(taskContainer);
    }
    
    
    const optionsDD = document.createElement('div');
    optionsDD.className = 'optionsDD';

    for (let i = 0; i < loesungen.length; i++) {
        const optionDD = document.createElement('div');
        optionDD.className = 'optionDD';
        optionDD.setAttribute('draggable', 'true');
        optionDD.setAttribute('id', loesungen[i]);
        optionDD.setAttribute('ondragstart', 'drag(event)');
        optionDD.textContent = loesungen[i];
        
        optionsDD.appendChild(optionDD);
    }
    container.appendChild(optionsDD);


    /* korrekturbutton*/
    const button = document.createElement('button');
    button.id = 'checkButton';
    button.textContent = 'Korrigieren';
    button.onclick = checkAnswers;
  
    container.appendChild(button); 

  }



  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dropzoneDD = ev.target;
  
    // Überprüfen, ob das Dropzone bereits etwas enthält und ob der Button schon verwendet wurde
    if (dropzoneDD.classList.contains('dropzoneDD') && dropzoneDD.innerHTML === "") {
      dropzoneDD.innerHTML = data;
      // Entferne den Button aus den verfügbaren Optionen, wenn er bereits verwendet wurde
      var draggedElement = document.getElementById(data);
      draggedElement.style.opacity = '0';  // Der Button wird unsichtbar
      draggedElement.setAttribute('draggable', 'false'); // Der Button wird nicht mehr dragbar
    }
  }
  
  function checkAnswers() {
    var tasks = document.querySelectorAll('.task');
    
    tasks.forEach(task => {
      var dropzoneDD = task.querySelector('.dropzoneDD');
      var userAnswer = dropzoneDD.textContent.trim();
      var correctAnswer = task.getAttribute('data-answer');
  
      dropzoneDD.classList.remove('correct', 'incorrect');
      if (userAnswer === correctAnswer) {
        dropzoneDD.classList.add('correct');
      } else {
        dropzoneDD.classList.add('incorrect');
      }
    });
  }