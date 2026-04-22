document.addEventListener("DOMContentLoaded", () => {

    const list = document.querySelector('#list');
    const input = document.querySelector('#product');
    const price = document.querySelector('#price');
    let addBtn = document.querySelector('#addBtn');

    addBtn.addEventListener('click', () => {

        const product = input.value.trim();
        const cost = price.value.trim();

        if (product === "" || cost === "") return;

        const div = document.createElement('div');

        div.textContent = `${product} - ${cost} AZN`;

        div.style.padding = "8px";
        div.style.margin = "5px";
        div.style.background = "#eee";

        list.appendChild(div);

        input.value = '';
        price.value = '';
    });

});


const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const opButtons = document.querySelectorAll("main button");
const numberButtons = document.querySelectorAll("footer li");

let activeInput = num1;


num1.addEventListener("focus", () => activeInput = num1);
num2.addEventListener("focus", () => activeInput = num2);


numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        activeInput.value += btn.innerText;
    });
});


opButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        const op = btn.innerText;

        if (isNaN(a) || isNaN(b)) {
            result.value = "Error";
            return;
        }

        let res;

        switch (op) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = b !== 0 ? a / b : "∞";
                break;
            case "%":
                res = (a / 100) * b;
                break;
        }

        result.value = res;
    });
});