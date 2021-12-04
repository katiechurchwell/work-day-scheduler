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
  var saveBtn = document.createElement("button");

  //row
  $(rowDiv).attr("class", "row");
  $(rowDiv).appendTo(".time-block");

  //time
  $(timeHour).attr("class", "hour col-1");
  $(timeHour).appendTo(rowDiv);

  //description
  $(descriptionDiv).appendTo(rowDiv);
  $(descriptionDiv).html('<textarea id="' + [i] + '" class="description col-12"></textarea>');

  //color coding
  if (currentTime == timeMomentFormat) {
    $(descriptionDiv).attr("class", "present col-9");
  } else if (currentTime > timeMomentFormat) {
    $(descriptionDiv).attr("class", "past col-9");
  } else {
    $(descriptionDiv).attr("class", "future col-9");
  }

  //save button
  $(saveBtn).attr("class", "saveBtn col-1");
  $(saveBtn).html(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">' +
      '<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>' +
      "</svg>"
  );
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
