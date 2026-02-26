const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const fruitList = document.getElementById('root');

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;
    fruitList.appendChild(li);
});
