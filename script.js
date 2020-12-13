// Moment declaration for day and time is positioned in header
$("#currentDay").text(moment().format('DD MM YYYY hh:mm:ss'));

// Moment.js Current time 
var currentTime = moment();

// Returns current time to the nearest hour - hh:mm becomes hh:00
currentTime = currentTime.startOf("hour");

// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");


// Time blocks to populate index.html
// 9 am 
var time1 = beforeTime.add(0, "h");
time1 = time1.format('hh:mm a');
// Populates time formula into html
$(".block1").text(time1);

// 10 am 
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm a');
// Populates time formula into html
$(".block2").text(time2);

// 11 am 
var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm a');
// Populates time formula into html
$(".block3").text(time3);

// 12 pm 
var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm a');
// Populates time formula into html
$(".block4").text(time4);

// 1 pm 
var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm a');
// Populates time formula into html
$(".block5").text(time5);

// 2 pm 
var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm a');
// Populates time formula into html
$(".block6").text(time6);

// 3 pm 
var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm a');
// Populates time formula into html
$(".block7").text(time7);

// 4 pm 
var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm a');
// Populates time formula into html
$(".block8").text(time8);

// 5 pm 
var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm a');
// Populates time formula into html
$(".block9").text(time9);

// Call the testTime function from the test.js file
testTime();

// Loops through input area to get item from localStorage
var hoursInPlanner = [9, 10, 11, 12, 1, 2, 3, 4, 5];
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