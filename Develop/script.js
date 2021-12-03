//current day displayed at top
var time = moment().format("MMMM Do YYYY");
$("#currentDay").append(time);

//global variables
var currentTime = String(moment().format("h a"));

//timeblocks
var scheduleArray = [
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
];

for (let i = 0; i < scheduleArray.length; i++) {
  var rowDiv = document.createElement("div");
  var timeDiv = $("<div></div>").text(scheduleArray[i]);

  $(timeDiv).attr("id", [i]);
  $(rowDiv).appendTo("#container");
  $(timeDiv).appendTo(rowDiv);

  if (currentTime === scheduleArray[i]) {
    $(timeDiv).attr("class", "present");
  }

  if (currentTime > scheduleArray[i]) {
    $(timeDiv).attr("class", "past");
  }

  if (currentTime < scheduleArray[i]) {
    $(timeDiv).attr("class", "future");
  }
}

//color coding

//if before current time, grey
//if after current time, green
