// Diplaying all TimeZones in Select Box
const timeZones = Intl.supportedValuesOf('timeZone') // Get all timezones
timeZones.forEach(timeZone => {
    let option = document.createElement('option');
    option.setAttribute('id','timeZone');
    option.innerHTML = timeZone;
    option.value= timeZone;
    document.getElementById("timeZones").append(option)
});
// Show Time according to TimeZone
let myCurrentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone // Get current timezone
let selectedTimeZone = document.getElementById("timeZones");
selectedTimeZone.value = myCurrentTimeZone;
function showTime()
{
    let currentTime = new Date().toLocaleTimeString("en-US", {timeZone: selectedTimeZone.value,timestyle:'full',hourCycle:'h12'})
    setTimeout(showTime, 1000);
    document.getElementById("Display_my_clock").textContent = currentTime;
}
//showTime();