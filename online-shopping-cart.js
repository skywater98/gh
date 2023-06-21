items = {
    apple: 700,
    orange: 800,
    lemon: 900,
};
let totalcost = 0;

const fruits = document.getElementsByClassName('add-to-cart');

for (const fruit of fruits) {
    fruit.addEventListener('click', () => {
        totalcost += items[fruit.parentElement.parentElement.id];
        document.getElementById('cost').innerText = totalcost;
    });
}
