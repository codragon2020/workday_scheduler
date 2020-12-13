// This function is used to compare the current hour with the hours in the planner
// If the current hour is before the planner hour, the planner hour will be green
// If the current hour is the same, the planner hour will be red
// If the current hour is after, the planner hour will be gray
function testTime() {
    // Sets time1 to 9a
    time1 = moment().startOf('day').add(9, "hours");
    console.log('this is time1 in test', time1);
    // Sets currentTime to the hour
    currentTime = currentTime.startOf("hour");
    console.log('this is currentTime', currentTime);
    // Compares time1 to currentTime
    if (currentTime.isAfter(time1)) {
        $(".form9").addClass("past")
    } else if (currentTime.isBefore(time1)) {
        $(".form9").addClass("future");
    } else if (currentTime.isSame(time1)) {
        $(".form9").addClass("present");
    };
    // Add time2 10AM
    time2 = moment().startOf('day').add(10, "hours");
    // Add time2 if/else
    if (currentTime.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".form10").addClass("present");
    };
    // time3 11AM
    time3 = moment().startOf('day').add(11, "hours");
    // Add time3 if/else
    if (currentTime.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".form11").addClass("present");
    };
    // time4 12PM
    time4 = moment().startOf('day').add(12, "hours");
    // Add time4 if/else
    if (currentTime.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".form12").addClass("present");
    };
    // time5 1PM
    time5 = moment().startOf('day').add(13, "hours");
    // Add time5 if/else
    if (currentTime.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".form1").addClass("present");
    };
    // time6 2PM
    time6 = moment().startOf('day').add(14, "hours");
    // Add time6 if/else
    if (currentTime.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".form2").addClass("present");
    };
    // time7 3M
    time7 = moment().startOf('day').add(15, "hours");
    // Add time7 if/else
    if (currentTime.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".form3").addClass("present");
    };
    // time8 4pm
    time8 = moment().startOf('day').add(16, "hours");
    // Add time8 if/else
    if (currentTime.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".form4").addClass("present");
    };
    // time9 5pm
    time9 = moment().startOf('day').add(17, "hours");
    // Add time9 if/else
    if (currentTime.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".form5").addClass("present");
    };

}