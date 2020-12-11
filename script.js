// Moment declaration for day and time is positioned in header
// moment(Date);
$("#currentDay").text(moment().format('DD MM YYYY hh:mm:ss'));

// Calculates the start of day + 9 to return 9 am
var beforeTime = moment().startOf('day').add(9, "hours");


// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm a');
// Populates time formula into html
$(".block1").text(time1);