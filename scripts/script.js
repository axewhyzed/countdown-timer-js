// const endDate = document.getElementById("input-date").value;
let input = prompt("Enter date, month, year and time (e.g. 01 January 2022 5:00 PM):");

let [date, month, year, time, amPm] = input.split(" ");

const endDate = date+" "+month+" "+year+" "+time+" "+amPm;
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    if(diff<0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24); // Converts to days
    inputs[1].value = Math.floor(diff / 3600) % 24; //Converts to hours
    inputs[2].value = Math.floor(diff / 60) % 60; // Converts to minutes
    inputs[3].value = Math.floor(diff) % 60; // Converts to seconds
}
//Initial call
clock()

setInterval(
    () => {
        clock()
    },
    1000
) // Calls function every 1 second to update time