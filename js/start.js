"use strict";

// const WordsArr = require('arrayFile');

import { WordsArr } from './words.js';
import { arrWords } from './posts.js';

let 
    randText = randomInteger(1, 2),
    randomWords;

let btn = document.querySelector('#btn_start'),
    body = document.querySelector('body'),
    btn_next = document.querySelector('#btn_next'),
    showWords = document.querySelector('.showWords'),
    select = document.querySelector('select'),
    main_btn = document.querySelector('#main_btn'),
    main = document.querySelector('.main'),
    alert_info = document.querySelector('#alert_info'),
    hello_h1 = document.querySelector('#hello_h1'),
    picWord = document.querySelector('.picWord'),
    mainWord = document.querySelector('.mainWord'),
    descWord = document.querySelector('.descWord'),
    idImg = document.querySelector('#idImg'),
    mainTwo = document.querySelector('.mainTwo'),
    next = document.querySelector('.next'),
    inputText = document.querySelector('#inputText'),
    error = document.querySelector('#error'),
    dalee = document.querySelector('#dalee'),
    dateWord = document.querySelector('.dateWord');


function words() {
    if (WordsArr.length == 0) {
        location.reload();
    } else {

        if (inputText.style.display == 'block') {
            inputText.value = '';
            inputText.style.display = 'none';
        }


        if (error.style.display == 'block') {
            error.style.display = 'none';
        }

        mainWord.classList.remove('blur');
        descWord.classList.remove('blur-sm');
        randomWords = randomInteger(1, 2);

        if (randomWords == 1) {
            mainWord.classList.add('blur');
            mainWord.style.cursor = 'pointer';

        } else {
            descWord.classList.add('blur-sm');
            descWord.style.cursor = 'pointer';
        }
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((length - 1) != 0) {
            alert_info.innerHTML = WordsArr.length - 1;
        } else {
            dalee.innerText = 'Конец.'
            alert_info.remove();
        }
        let i = randomInteger(0, WordsArr.length - 1);
        console.log(i);
        mainWord.innerHTML = WordsArr[i].name;
        descWord.innerHTML = WordsArr[i].desc;
        if (randomWords == 1) {
            inputText.style.display = 'block';
            inputText.focus();
        }
        WordsArr.splice(i, 1);
        setTimeout(() => {
            main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
            next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
        }, 800);

    }
}

function logger() {
    if (arrWords.length == 0) {
        location.reload();
    } else {
        descWord.classList.add('blur-sm');
        dateWord.classList.add('blur-sm');
        if (dateWord.style.display == 'flex') {
            dateWord.style.display = 'none';
        }
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((arrWords.length - 1) != 0) {
            alert_info.innerHTML = arrWords.length - 1;
        } else {
            alert_info.remove();
            // alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, arrWords.length - 1);
        console.log(i);


        // idImg.src = '../pictures/no_photo.png';
        idImg.style.display = 'none';

        // console.log(arrWords[i].pic);


        if (arrWords[i].pic == '') {
            mainWord.innerHTML = arrWords[i].name;
            descWord.innerHTML = arrWords[i].desc;

            if (arrWords[i].dateWord.length > 0) {
                dateWord.innerHTML = '';
                dateWord.style.display = 'flex';
                dateWord.innerHTML +=
                    `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                dateWord.innerHTML += `<p>${arrWords[i].dateWord}</p>`;
            }
            arrWords.splice(i, 1);
            setTimeout(() => {
                main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
            }, 800);
        } else {
            idImg.src = `${arrWords[i].pic}`;
            mainWord.innerHTML = 'wait...'
            descWord.innerHTML = 'wait...';
            idImg.onload = () => {
                idImg.style.display = 'block';
                console.log(i);
                console.log(arrWords[i].name);
                console.log(arrWords[i].desc);
                mainWord.innerHTML = arrWords[i].name;
                descWord.innerHTML = '<p class="font-normal">' + arrWords[i].desc + '</p>';

                if (arrWords[i].dateWord.length > 0) {
                    dateWord.innerHTML = '';
                    dateWord.style.display = 'flex';
                    dateWord.innerHTML +=
                        `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                    dateWord.innerHTML += `<p>${arrWords[i].dateWord}</p>`;
                }
                arrWords.splice(i, 1);
                setTimeout(() => {
                    main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                    next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                }, 800);
            };
        }

    }
}


btn.addEventListener('click', () => {
    next.style.display = 'flex';
    if (select.value == 'Слова') {
        body.style.justifyContent = 'space-evenly';
        // btn_next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        // mainWord.classList.add('decoration-sky-500');
        // mainWord.classList.add('text-green-500');
        if (randText == 1) {
            mainWord.classList.add('text-green-500');
        } else {
            mainWord.classList.add('text-purple-400');
        }
        mainWord.classList.add('underline');
        mainWord.classList.remove('fs-3');
        mainWord.classList.add('text-3xl');
        descWord.classList.remove('fs-5');
        descWord.classList.add('font-thin');
        descWord.classList.add('text-xl');
        descWord.classList.add('leading-relaxed');
        descWord.style.padding = '10px';
        picWord.remove();
        words();
    } else {
        logger();
    }

    btn.remove();
    select.remove();
    hello_h1.remove();


    alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


// btn_next.addEventListener('click', () => {
//     if (select.value == 'Слова') {
//         words();
//     } else {
//         logger();
//     }
// });


showWords.addEventListener('touchend', (e) => {
    e.preventDefault();

    console.log('dasdas');

    if (select.value == 'Слова') {
        words();
    } else {
        logger();
    }  
});


descWord.addEventListener('click', (e) => {
    e.preventDefault();
    descWord.style.cursor = 'auto';
    descWord.classList.remove('blur-sm');
});

mainWord.addEventListener('click', (e) => {
    e.preventDefault();
    descWord.style.cursor = 'auto';
    mainWord.classList.remove('blur');
});

dateWord.addEventListener('click', (e) => {
    e.preventDefault();
    dateWord.style.cursor = 'auto';
    dateWord.classList.remove('blur-sm');
});


// document.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         protect();
//     }
// });



inputText.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        protect();
    }
});



next.addEventListener('click', (e) => {
    e.preventDefault();
    protect();
});


function protect() {
    if (select.value == 'Слова') {
        if (randomWords == 1) {
            // console.dir(mainWord);
            // console.dir(inputText);

            // inputText.value.toLowerCase();
            // mainWord.innerHTML.toLowerCase();

            let mainWordLet = mainWord.innerHTML.toLowerCase();
            let inputTextLet = inputText.value.toLowerCase();



            console.log(mainWordLet.trim());
            console.log(inputTextLet.trim());

            if (mainWordLet.trim() == inputTextLet.trim()) {
                words();
            } else {
                error.style.display = 'block';
            }
        } else {
            words();
        }
    } else {
        logger();
    }
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 17 || date.getHours() < 6) {
        body.classList.add('dark:bg-slate-800');
        hello_h1.style.color = '#fff';
        main.classList.add('dark:bg-slate-700');
        descWord.style.color = 'rgb(209 213 219)';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
    }
}