//current day displayed at top
var time = moment().format("MMMM Do YYYY");
$("#currentDay").append(time);

//global variables
var currentTime = moment().format("ha");

//timeblocks
var scheduleArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < scheduleArray.length; i++) {
  var timeMoment = moment().hour(scheduleArray[i]);
  var timeMomentFormat = moment(timeMoment).format("ha");


  var rowDiv = document.createElement("div");
  var timeHour = $("<div></div>").text(timeMomentFormat);
  var descriptionDiv = document.createElement("div");
  

  //row
  $(rowDiv).attr("class", "row");
  $(rowDiv).appendTo(".time-block");

  //time
  $(timeHour).attr("class", "hour col-1");
  $(timeHour).appendTo(rowDiv);

  //description
  $(descriptionDiv).appendTo(rowDiv);

  //color coding
  if (currentTime == timeMomentFormat) {
    $(descriptionDiv).attr("class", "present col-9");
  } else if (currentTime > timeMomentFormat) {
    $(descriptionDiv).attr("class", "past col-9");
  } else {
    $(descriptionDiv).attr("class", "future col-9");
  }

}


