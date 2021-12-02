//current day displayed at top
var time = moment().format('MMMM Do YYYY');
$( "#currentDay" ).append(time);

//timeblocks
//create rows and columns
var scheduleArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

$.each( scheduleArray, function (index, value) {
    var rowDiv = document.createElement("div");
    var timeDiv = $("<div></div>").text(value);
    $(timeDiv).attr("id",index);
    $(rowDiv).appendTo("#container");
    $(timeDiv).appendTo(rowDiv);
});
//time on left should stay the same