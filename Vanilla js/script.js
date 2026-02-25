let fruit = ['banana', 'apple', 'grape'];
let x = 0;
setInterval(() => {
    fruit[0] = x % 2 === 0 ? 'banana' : 'apple';
    let cssClass = fruit[0] === 'banana' ? 'yellow' : 'red';
    document.getElementById('list').innerHTML = `<ul><li class="${cssClass}">${fruit[0]}</li><li>${fruit[1]}</li><li>${fruit[2]}</li></ul>`;
    x++;
}, 1000);

