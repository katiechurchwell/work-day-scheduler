//current day displayed at top
var time = moment().format("MMMM Do YYYY");
$("#currentDay").append(time);

//global variables
var currentTime = moment().format("H");

//timeblocks
var scheduleArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < scheduleArray.length; i++) {
  var timeMoment = moment().hour(scheduleArray[i]);
  var timeMomentFormat = moment(timeMoment).format("ha");

  var rowDiv = document.createElement("div");
  var timeHour = $("<div></div>").text(timeMomentFormat);
  var descriptionDiv = document.createElement("div");
  var saveBtn = document.createElement("button");

  //row
  $(rowDiv).attr("class", "row");
  $(rowDiv).appendTo(".time-block");

  //time
  $(timeHour).attr("class", "hour col-1");
  $(timeHour).appendTo(rowDiv);

  //description
  $(descriptionDiv).appendTo(rowDiv);
  $(descriptionDiv).html(
    '<textarea id="' + [i] + '" class="description col-12"></textarea>'
  );

  //color coding
  if (currentTime < scheduleArray[i]) {
    $(descriptionDiv).attr("class", "future col-9");
  } else if (currentTime > scheduleArray[i]) {
    $(descriptionDiv).attr("class", "past col-9");
  } else {
    $(descriptionDiv).attr("class", "present col-9");
  }

  //save button
  $(saveBtn).attr("class", "saveBtn col-1 oi oi-lock-locked");
  $(saveBtn).appendTo(rowDiv);
}

//save function
var saveBtn = $(".saveBtn");

$(saveBtn).click(function (event) {
  var clickedRow = event.target.parentElement;
  var clickedTextArea = clickedRow.getElementsByTagName("textarea");
  var data = $(clickedTextArea).val();
  localStorage.setItem($(clickedTextArea).attr("id"), data);
});

for (const [key, value] of Object.entries(localStorage)) {
  var textAreas = document.getElementById(key);
  if (key === $(textAreas).attr("id")) {
    $(textAreas).text(value);
  }
}
