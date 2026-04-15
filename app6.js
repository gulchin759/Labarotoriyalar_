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