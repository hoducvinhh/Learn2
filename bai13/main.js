function updateColock()
{
    const now = new Date();
const hours = String(now.getHours()).padStart(2, "0");
const minutes =  String(now.getMinutes()).padStart(2, "0");
const second =  String(now.getSeconds()).padStart(2, "0");
const timeString = `${hours}: ${minutes}: ${second}`;

document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateColock, 1000); // update lien tuc

