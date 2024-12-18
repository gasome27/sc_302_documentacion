console.log("Hola Mundo_editado");
console.log("cambios en el archivo");

git clone <URL-del-repositorio>

  npm install fullcalendar
  
<link href="https://cdm.jsdelivr.net/npm/fullcalendar@6.18/index.global.css" rel="stylesheet">
  
  <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js"></script>

<div id="calendar></div>

document.addEventListener('DOMContentLoaded', function() {

  var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      initialView: 'dayGridMonth'
      
    });
  
  calendar.render();
  
});

// Issues

// https://github.com/tlgadrkn/full-calendar-example

// https://github.com/fullcalendar/fullcalendar/issues/7845#issue-2745829248

// mi gist <script src="https://gist.github.com/gasome27/659172fce8afe36bc8787b7202279edc.js"></script>
