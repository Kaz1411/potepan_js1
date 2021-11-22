 /* global $*/


 (function() {
  let timer = document.getElementById('timer');
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');
  let startTime;
  let elapsedTime = 0;
  let timerId;
  let timeToadd = 0;

  function updateTimetText() {
   let hour = Math.floor(elapsedTime / 1.296e9);
   let minute = Math.floor(elapsedTime / 60000);
   let second = Math.floor(elapsedTime % 60000 / 1000);
   let mscond = elapsedTime % 1000;

   hour = ('0' + hour).slice(-2);
   minute = ('0' + minute).slice(-2);
   second = ('0' + second).slice(-2);
   mscond = ('0' + mscond).slice(-2);

   timer.textContent = hour + ':' + minute + ':' + second + ':' + mscond;
  }

  function countUp() {

   timerId = setTimeout(function() {
    elapsedTime = Date.now() - startTime + timeToadd;
    updateTimetText()
    countUp();
   }, 10);
  }


  start.addEventListener('click', function() {


   startTime = Date.now();


   countUp();
  });


  stop.addEventListener('click', function() {

   clearTimeout(timerId);

   timeToadd += Date.now() - startTime;
  });


  reset.addEventListener('click', function() {

   elapsedTime = 0;

   timeToadd = 0;

   updateTimetText();

  });


 })();

 function func1() {
  $('#start').prop('disabled', true);
  $('#stop').prop('disabled', false);
 }

 function func2() {
  $('#start').prop('disabled', false);
  $('#stop').prop('disabled', true);
 }

 function func3() {
  $('#start').prop('disabled', false);
  $('#stop').prop('disabled', false);
 }
 