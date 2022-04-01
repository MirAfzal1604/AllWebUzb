var getyear = document.querySelector(".yearBirthday");

var date = new Date(2004, 4, 16);

var today = new Date();
var birthDate = date;
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
var year = age + m;
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}
getyear.innerHTML = year;