// let currentDay = $("#currentDay");
// var today = dayjs();
// currentDay.text(today.format("dddd, MMMM DD"));

// function createTimeBlock() {
//     var timeBlock = $('#timeBlocksContainer');
//     var currentHours = dayjs().hour();
//     timeBlock.addClass('.time-block');
//     timeBlock.append(currentHours);
//     currentHours.addClass('.hour');
//     currentHours.append('currentHours');
//     createTimeBlock.append(timeBlock);
    
// }   
// createTimeBlock();
    
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM",
        reminder: ""
    },
    {   id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "PM",
        reminder: ""
    },
    {
        id: "9",
        hour: "06",
        time: "18",
        meridiem: "PM",
        reminder: ""
    }

]
$(document).ready(function() {
function getHeaderDate() {
    var currentHeaderDate = $("#currentDay").format("dddd, MMMM DD");
    $("#currentDay").text(currentHeaderDate);
}

function saveReminder() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

function displayReminder() {
    $("#timeBlocksContainer").empty();
    myDay.forEach(function(thisHour) {
        $('#${_thisHour.id}').val(thisHour.reminder);
    });
    
    }
} 

getReminder();
getHeaderDate();
displayReminder();

})