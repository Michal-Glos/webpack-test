import '../scss/main.scss';

import moment from 'moment';
import bgImgLight from '../assets/img/background.jpg';
import bgImgDark from '../assets/img/background-2.jpg';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

import { hello } from './greeting.js';

console.log(hello('Furai'));


const firstName = 'Michał';
const age = 32;


console.log(firstName);
console.log(age)
console.log(`Cześć! Mam na imię ${firstName} i mam ${age} lata.`);


function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`)
    return myNumber * 7;
}

const myResult = calculate(5);

console.log(myResult);



const humanOne = {
    name: 'Maciek',
    age: 32,
    address: 'Warszawa'
};

const humanTwo = {
    name: 'Ryszard',
    age: 35,
    address: humanOne.address
};


if (humanOne.age > humanTwo.age) {
    console.log('Human one jest starszy');
} else if (humanOne.age === humanTwo.age) {
    console.log('Są tego samego wieku');
} else {
    console.log('Human two jest starszy');
}




function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.week-summary__description--js', 'Witaj mordeczko w moim świecie!');

const greet = (age, firtsName) => {
    console.log(`Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata`)

}




greet(32, `Michał`);

if ('Javascript' != 'Java') {
    console.log('Java to nie Javascript');
}


// const button = document.querySelector('.action--js');

// console.log(button)

// const myClick =() => {
//     console.log('Kliknąłeś')
//     const heading = document.querySelector('.main__heading--js');
//     console.log(heading.innerHTML);
//     heading.innerHTML = `Zonk hahahaha`;
//     heading.classList.toggle('klasa-z-js');
//     console.log(heading.innerHTML);
// }

// button.addEventListener('click', myClick );

const button = document.querySelector('.action--js');

let myTitle = true;
const myClick = () => {
    if (myTitle) {
        const heading = document.querySelector('.main__heading--js');
        heading.innerHTML = `Zonk hahahaha`;
        myTitle = false;
    } else {
        const heading = document.querySelector('.main__heading--js');
        heading.innerHTML = `Michał Głos - Strona domowa`;
        myTitle = true;
    }

}
button.addEventListener('click', myClick);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})


const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = startOfDay;



console.log(startOfDay);


let isDark = false;

const switchModes = document.querySelector('.mode--js');

switchModes.addEventListener('click', () => {
    if (isDark) {
        document.documentElement.style.setProperty('--background-color', '#add8e6');
        document.documentElement.style.setProperty('--text-color', '#808080');
        document.documentElement.style.setProperty('--background-image', `url(${bgImgLight})`)
        isDark = !isDark;
    } else {
        document.documentElement.style.setProperty('--background-color', '#00005e');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--background-image', `url(${bgImgDark})`)
        isDark = !isDark;
    }
})

const myArray = [':D', ':X', 'xD', ':F'];

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(`Pod indeksem ${i} jest element ${myArray[i]}`)
}

let myNumber = 0;

while (myNumber < 10) {
    console.log(myNumber);
    myNumber++;
}

const michal = {
    name: 'Michał',
    age: 32
}

for (let myProperty in michal) {
    console.log(michal[myProperty]);
}

for (let element of myArray) {
    console.log(element);
}


document.querySelector(".spin__button--js").addEventListener("click", (e) => {
	document.querySelector("div").getAnimations().forEach((anim) => {
		anim.cancel();
		anim.play();
	});
});


fetch('https://api.github.com/users/michal-glos/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, html_url} = repo;
        const repositoryList = document.querySelector('.list--js');
        const myTemplate = `<li>
        ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">Link do githuba</a>
        </li>`;
            repositoryList.innerHTML += myTemplate;    
    }

})
.catch(error => {
console.log('Nie udało się pobrać');
})