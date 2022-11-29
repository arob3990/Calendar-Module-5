// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDay = dayjs().format('MMMM DD,YYYY');
$('#currentDay').text("Today is "+currentDay);
var currentTime = dayjs().format('h:mm A')
$('#currentTime').text("The current time is: "+ currentTime);
var saveButton = $(".btn")
var textInput = $(".textarea")
var textareaElements = document.querySelectorAll('[id^="hour-"]')
console.log(textareaElements)
var time = $('.time')
var currentHour = dayjs().format('HH')
console.log(currentHour)


  // Adds a listener for click events on the save button. The user input into the text area is
  // then saved to the local storage
  saveButton.on('click',function(){
    var eventDescription = $(this).siblings("textarea").val();
    console.log("Event Description is "+ eventDescription);//saves user input into text area as var eventDescription
    
    var eventTime = $(this).parent().attr('id');//sets eventTime variable to be the id name for that hour
    console.log("The event id is " + eventTime);
  
    
  localStorage.setItem(eventTime,eventDescription,)
  
  })

  // Code below applies the past, present, or future class to each time
  // block based off of the current hour

  if(parseInt(currentHour) < 6){
    $("#hour-6").addClass("future")
    $("#hour-7").addClass("future")
    $("#hour-8").addClass("future")
    $("#hour-9").addClass("future")
    $("#hour-10").addClass("future")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }

  if(parseInt(currentHour) === 6) {
    $("#hour-6").addClass("present")
    $("#hour-7").addClass("future")
    $("#hour-8").addClass("future")
    $("#hour-9").addClass("future")
    $("#hour-10").addClass("future")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===7){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("present")
    $("#hour-8").addClass("future")
    $("#hour-9").addClass("future")
    $("#hour-10").addClass("future")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===8){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("present")
    $("#hour-9").addClass("future")
    $("#hour-10").addClass("future")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===9){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("present")
    $("#hour-10").addClass("future")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===10){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("present")
    $("#hour-11").addClass("future")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===11){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("present")
    $("#hour-12").addClass("future")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===12){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("present")
    $("#hour-13").addClass("future")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===13){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("present")
    $("#hour-14").addClass("future")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===14){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("present")
    $("#hour-15").addClass("future")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===15){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("past")
    $("#hour-15").addClass("present")
    $("#hour-16").addClass("future")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===16){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("past")
    $("#hour-15").addClass("past")
    $("#hour-16").addClass("present")
    $("#hour-17").addClass("future")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===17){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("past")
    $("#hour-15").addClass("past")
    $("#hour-16").addClass("past")
    $("#hour-17").addClass("present")
    $("#hour-18").addClass("future")
  }
  if(parseInt(currentHour) ===18){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("past")
    $("#hour-15").addClass("past")
    $("#hour-16").addClass("past")
    $("#hour-17").addClass("past")
    $("#hour-18").addClass("present")
  }

  if(parseInt(currentHour) > 18){
    $("#hour-6").addClass("past")
    $("#hour-7").addClass("past")
    $("#hour-8").addClass("past")
    $("#hour-9").addClass("past")
    $("#hour-10").addClass("past")
    $("#hour-11").addClass("past")
    $("#hour-12").addClass("past")
    $("#hour-13").addClass("past")
    $("#hour-14").addClass("past")
    $("#hour-15").addClass("past")
    $("#hour-16").addClass("past")
    $("#hour-17").addClass("past")
    $("#hour-18").addClass("past")
  }


//Sets the previous user input that was saved to local storage to the fiels they were previously 
//entered into
window.onload = function loadPrevious(){
  for(let i = 0; i < textareaElements.length; i++){
    textareaElements[i].children[1].value = localStorage.getItem(textareaElements[i].id)
    console.log(textareaElements[i].id);
  } 
}
