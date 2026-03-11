let li_s = document.querySelectorAll("ul li")

li_s.forEach((element) => {

    element.addEventListener("click", () => {
        if (element.textContent == '1') {
            window.location.href = 'index.html'
        }
        else if (element.textContent == '2') {
            window.location.href = 'lab2.html'
        }
        else if (element.textContent == '3') {
            window.location.href = 'lab3.html'
        }

    })


})




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


