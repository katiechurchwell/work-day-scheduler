//current day displayed at top
var time = moment().format('MMMM Do YYYY');
$( "#currentDay" ).append(time);
var currentTime = moment().format('h a'); //need to eventually add minutes

//timeblocks
//create rows and columns
//business hours
var scheduleArray = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"];

for (let i = 0; i < scheduleArray.length; i++) {
    var rowDiv = document.createElement("div");
    var timeDiv = $("<div></div>").text(scheduleArray[i]);
    $(timeDiv).attr("id",[i]);
    $(timeDiv).attr("class","time");
    $(rowDiv).appendTo("#container");
    $(timeDiv).appendTo(rowDiv);

    // var idTimeDiv = document.getElementById([i]);
    // if (idTimeDiv > currentTime) {
    //     $("idTimeDiv").css("background-color", "red");
    // } else {
    //     $("idTimeDiv").css("background-color", "blue");
    // }
};

//color coding

//if before current time, grey
//if after current time, green