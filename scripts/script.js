const endDate = "4 April 2023 2:30:23 PM";

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
)