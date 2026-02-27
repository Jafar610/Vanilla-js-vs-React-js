const root = ReactDOM.createRoot(document.getElementById('root'));

let fruit = ['banana', 'apple', 'grape'];
let x = 0;

setInterval(() => {
    fruit[0] = x %2 ==0 ? React.createElement('li', {className: 'yellow'}, 'banana') : React.createElement('li', {className: 'orange'}, 'orange');

    const test = React.createElement(
        'ul', null,
        fruit[0],
        React.createElement('li', null, fruit[1]),
        React.createElement('li', null, fruit[2])
    )
    x++;
    root.render(test);
}, 1000);
