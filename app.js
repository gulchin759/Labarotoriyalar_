let li_s = document.querySelectorAll("ul li")

li_s.forEach((element) => {

    element.addEventListener("click", () => {
        if (element.textContent == '1') {
            window.location.href = 'index.html'
        }
        else if (element.textContent == '2') {
            window.location.href = 'lab2.html'
        }

    })


})










// salam




// footer ul {
//     display: flex;
//     flex - direction: row;
//     margin: 0 auto;
//     margin - top: 2rem;
//     width: 16rem;
//     overflow - x: auto;
//     margin - bottom: 1rem;
// }

// footer li {
//     list - style: none;
//     padding: 1rem;
//     font - size: 1.5rem;
//     font - weight: 900;
//     border - radius: 0.5rem;
//     background - color: rgb(77, 148, 15);
//     margin - left: 0.3rem;
//     color: white;
// }