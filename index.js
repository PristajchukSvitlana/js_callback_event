
appEl = document.querySelector('#app');

/*function forEachFunction(array, callback) {
    for (let i = 0; i < array.length; i++) {
        console.log(callback(array[i]));
    }
}
function sum(element) {
    return element + 5;
}
forEachFunction([1, 2, 3, 4, 5], sum);

const salary = [
    { id: 1, salary: 1000, name: 'John', flag: true },
    { id: 2, salary: 2000, name: 'Bob', flag: false },
    { id: 3, salary: 1500, name: 'Mike', flag: true },
    { id: 4, salary: 3000, name: 'Kate', flag: false },
    { id: 5, salary: 2500, name: 'Maria', flag: false },
];

const usersBonus = salary.filter(item => item.flag === true)

forEachSalary(usersBonus, mult)

function bonus(item) {
    return item + 100;
}

function mult(item) {
    return item * 1.1;
}

function fine(item) {
    return item - 50;
}

function forEachSalary(array, func) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(func(element.salary));
    }
}

console.log(new Date().toLocaleDateString());

let counterDate = false;
let dateMonth = 7;

if (new Date().toLocaleDateString() === `04.0${dateMonth}.${new Date().getFullYear()}`) {
    salary.forEach(element => {
        element.flag = false
    });
    counterDate = true;
}
if (counterDate) {
    if (dateMonth === 13) {
        dateMonth = 1;
    } else {
        dateMonth += 1;
    }
}
console.log(dateMonth);


//Event listener for button click
const headingEl = document.createElement('h2');
headingEl.textContent = 'Hello, World!';
appEl.append(headingEl);

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Click me';



buttonEl.addEventListener('click', () => {
    headingEl.textContent = 'Clicked!';
    console.log('Button was clicked!');
})

appEl.append(buttonEl);


/*const buttonEl = document.querySelector('.button');
const textEl = document.querySelector('.text');*/

/*let counter = 0
textEl.textContent = counter

buttonEl.addEventListener('click', function (e) {
    textEl.textContent = ++counter;
    console.log('click');
});*/

/*const btnEl = document.createElement('button');
btnEl.textContent = 'Minus';
btnEl.setAttribute('class', 'minus');
console.log(
    btnEl
);
//btnEl = document.querySelector('.minus');
btnEl.addEventListener('click', function () {
    //btnEl.textContent = ++counter;
    console.log('min')
});


const btnEl2 = document.createElement('button');
btnEl2.textContent = 'Plus';
btnEl2.setAttribute('class', 'plus');
//btnEl2 = document.querySelector('.plus');
btnEl2.addEventListener('click', function () {
    //btnEl2.textContent = ++counter;
    console.log('plus')
});

appEl.append(btnEl, btnEl2);


/*const minusEl = document.querySelector(".minus");
const plusEl = document.querySelector(".plus");
const counterEl = document.querySelector(".counter");

let counter = 0
counterEl.textContent = counter;

minusEl.addEventListener('click', () => {
    if (counter > 0) {
        counterEl.textContent = --counter;
    } 
});

plusEl.addEventListener('click', function (e) {
    counterEl.textContent = ++counter;
});*/

//Создать кнопку и вывести координаты на которые вы нажали

/*const coordsBtn = document.createElement('button');
coordsBtn.textContent = 'Get Coordinates';
coordsBtn.addEventListener('click', (event) => {
    console.log(event);
    const x = event.clientX;
    const y = event.clientY;
    console.log(`Coordinates: X: ${x}, Y: ${y}`);
});
appEl.append(coordsBtn);*/

//Перебрать все кнопки с помощью foreach
//Вывести в консоль при клике на кнопку, на какой именно элемент мы нажали
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(`Clicked on button: ${e.target.textContent}`);
    });
});

const buttonEl = document.querySelector('.button');
const contentEl = document.querySelector('.content');

buttonEl.addEventListener('click', function (e) {
    if (e.target.textContent !== 'Show') {
        e.target.textContent = 'Show';
    } else {
        e.target.textContent = 'Hide';
    }
    if (contentEl.getAttribute('class') === 'content show') {
        contentEl.setAttribute('class', 'content hide')
    } else {
    }});

    console.dir(contentEl);