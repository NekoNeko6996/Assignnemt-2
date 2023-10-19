const calender = document.getElementById('calender-i');
//
const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');
//
const selectHour = document.getElementById('hour');
const selectMinutes = document.getElementById('minutes');
const selectAm = document.getElementById('am/pm');




function changeDate() {
    const result = calender.value;
    console.log(result);

    const year = result.slice(0, 4);
    const month = result.slice(5, 7);
    const day = result.slice(8, 10);

    const hour = result.slice(11, 13);
    const minutes = result.slice(14, 16);

    console.log(day, month, year, hour, minutes);

    yearInput.value = year;
    monthInput.value = month;
    dayInput.value = day;  


    if(parseInt(hour) >= 13) {
        selectAm.value = "PM";
        selectHour.value = `${parseInt(hour) - 12}`;
    } else {
        selectAm.value = "AM";
        console.log(hour[1]);
        selectHour.value = (parseInt(hour) > 9)? hour : hour[1];
    }  
    selectMinutes.value = minutes;
}