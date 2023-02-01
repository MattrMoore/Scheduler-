// Link to api
<script>https://day.js.org/en/</script>

$(document).ready(function() {
  
  let timeEl = $('<p>');
  let dayEl = $('<p>');
  let box0 = $('#div0');
  let box1 = $('#div1');
  let box2 = $('#div2');
  let box3 = $('#div3');
  let box4 = $('#div4');
  let box5 = $('#div5');
  let box6 = $('#div6');
  let box7 = $('#div7');
  let box8 = $('#div8');







})
$(function tick() {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

//Pseudocode

//GIVEN I am using a daily planner to create a schedule

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
  // We want to use DayJS to display the current date
    // Go to the docs
    // Make sure the Dayjs cdn link exists in the html file
    // Create a variable, get js data
    // Set the format HH:MM:SS
    // set the current time to an element

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
  // Complete the rest of the timeblocks from the three that were given to us in the HTML file
  // remove static past, present, and future classes
  // find a way to programmatically add or remove the appropriate class
  // Note: colors need to shift out at start of new hour. Do we need to even worry about minutes? or just change it on hour block times. 

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  // Compare the time block (hour that it is) against the current time for DAyJs (). Then apply the correct class based on the comparison in time.

//WHEN I click into a timeblock
//THEN I can enter an event
  // Grab the Text input (text areas)


//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
  // Event listener on the save button

//WHEN I refresh the page
//THEN the saved events persist
