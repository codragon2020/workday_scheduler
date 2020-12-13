// Moment declaration for day and time is positioned in header
$("#currentDay").text(moment().format('MM/DD/YYYY hh:mm:ss'));

// Moment.js Current time 
var currentTime = moment();

// Returns current time to the nearest hour - hh:mm becomes hh:00
currentTime = currentTime.startOf("hour");

// Call the testTime function from the test.js file
testTime();

// Loops through input area to get item from localStorage
var hoursInPlanner = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// Loop through hours array
for (var i = 0; i < hoursInPlanner.length; i++) {
    // Get value from each key
    var dataHour = localStorage.getItem(hoursInPlanner[i]);
    // Put value into the form
    $(".form" + hoursInPlanner[i]).val(dataHour);
}

// Event listener to save to localStorage
// W3schools: The siblings() method returns all sibling elements of the selected element
$(".saveBtn").click(function () {
    var formValue = $(this).siblings(".form-control").val();
    console.log("The save button worked");
    var listItem = $(this).parent().data("hour");
    // Using the save button adds the key(hour) and value(user input) to localStorage
    localStorage.setItem(listItem, formValue);
});