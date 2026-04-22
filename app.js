document.addEventListener("DOMContentLoaded", () => {

    let li_s = document.querySelectorAll("ul li");

    li_s.forEach((element) => {

        element.addEventListener("click", () => {

            const value = element.textContent.trim();

            if (value == '1') {
                window.location.href = 'index.html';
            }
            else if (value == '2') {
                window.location.href = 'lab2.html';
            }
            else if (value == '3') {
                window.location.href = 'lab3.html';
            }
            else if (value == '4') {
                window.location.href = 'lab4.html';
            }
            else if (value == '5') {
                window.location.href = 'lab5.html';
            }
            else if (value == '6') {
                window.location.href = 'lab6.html';
            }
            else if (value == '7') {
                window.location.href = 'lab7.html';
            }
            else if (value == '8') {
                window.location.href = 'lab8.html';
            }


        });

    });

});




let date = document.querySelector('#date-input');
let out = document.querySelector('#out-input')

date.addEventListener("input", () => {
    let birthValue = date.value;
    console.log(date.value);



    let birthParts = birthValue.split("-");
    let birthYear = parseInt(birthParts[0]);
    let birthMonth = parseInt(birthParts[1]);
    let birthDay = parseInt(birthParts[2]);

    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDay = today.getDate();

    let ageYears = todayYear - birthYear;
    let ageMonths = todayMonth - birthMonth;
    let ageDays = todayDay - birthDay;


    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(todayYear, todayMonth - 1, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }
    out.value = `Sizin yaşayırsınız: ${ageYears} il, ${ageMonths} ay, ${ageDays} gün`;
});



