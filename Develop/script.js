//current day displayed at top
var time = moment().format('MMMM Do YYYY');
$( "#currentDay" ).append(time);

//timeblocks
//create rows and columns
var scheduleArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

$.each( scheduleArray, function (index, value) {
    //create div row with div column inside and textcontent value
    $( "#container" ).append("<div class='row'><div class='time'></div></div>");
    $( ".time" ).append(value);
});
//time on left should stay the same