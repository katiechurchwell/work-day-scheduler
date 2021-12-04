//current day displayed at top
var time = moment().format("MMMM Do YYYY");
$("#currentDay").append(time);

//global variables
var currentTime = String(moment().format("H"));
console.log(currentTime);

//timeblocks
var scheduleArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < scheduleArray.length; i++) {
  var timeMoment = moment().hour(scheduleArray[i]);
  var timeMomentObject = timeMoment.toObject();
  var timeMomentObjectHours = timeMomentObject.hours
console.log(timeMomentObjectHours)

  var rowDiv = document.createElement("div");
  var timeDiv = $("<div></div>").text(timeMomentObjectHours);
  var textDiv = document.createElement("div");

  //row creation
  $(rowDiv).attr("class", "row");
  $(rowDiv).appendTo("#container");

  //time
  $(timeDiv).attr("id", [i]);
  $(timeDiv).appendTo(rowDiv);

  //description
  $(textDiv).attr("class", "description");
  $(textDiv).appendTo(rowDiv);

  //color coding
  if (currentTime === timeMomentObjectHours) {
    $(timeDiv).attr("class", "present");
  } else if (currentTime > scheduleArray[i]) {
    $(timeDiv).attr("class", "past");
  } else {
    $(timeDiv).attr("class", "future");
  }
}
