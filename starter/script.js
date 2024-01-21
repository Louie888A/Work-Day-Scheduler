// Select the timeBlocksContainer element
const timeBlocksContainer = $("#timeBlocksContainer");

// Get the current hour using dayjs library
const currentHour = dayjs().hour();

// Create a new div element for the time block
const timeBlock = $("<div>").addClass("time-block");

// Append the current hour to the time block
timeBlock.append(currentHour);

// Add a class to the current hour element
timeBlock.find(":first-child").addClass("hour");

// Append the time block to the timeBlocksContainer
timeBlocksContainer.append(timeBlock);

$(document).ready(function () {
  // Get the current date and time
  let currentDay = $("#currentDay");
  var today = dayjs();
  currentDay.text(today.format("dddd, MMMM DD"));

  // Create time blocks for each hour of the day
  for (let hour = 9; hour <= 17; hour++) {
    // Select the timeBlocksContainer element
    const timeBlocksContainer = $("#timeBlocksContainer");

    // Get the current hour using dayjs library
    const currentHour = dayjs().hour();

    // Create a new div element for the time block
    const timeBlock = $("<div>").addClass("time-block");

    // Append the current hour to the time block
    timeBlock.append(currentHour);

    // Add a class to the current hour element
    timeBlock.find(":first-child").addClass("hour");

    // Append the time block to the timeBlocksContainer
    timeBlocksContainer.append(timeBlock);
  }

  // Find all time blocks and set their classes based on their hour
  $(".time-block").each(function () {
    const blockHour = parseInt($(this).find(".hour").text());
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Add event listeners to the save button
  $(".saveBtn").on("click", function () {
    // Get the text content of the textarea
    const text = $(this).siblings(".description").val();
    // Get the hour of the time block
    const time = $(this).parent().attr("id");
    // Save the text content to local storage
    localStorage.setItem(time, text);
  });

  // Get the text content from local storage and set it to the textarea
  $(".time-block").each(function () {
    const time = $(this).attr("id");
    const text = localStorage.getItem(time);
    $(this).find(".description").val(text);
  });
});
