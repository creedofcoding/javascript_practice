const trafficLightEl_1 = document.querySelector('#trafficLight_1');
const trafficLightEl_2 = document.querySelector('#trafficLight_2');
const trafficLightEl_3 = document.querySelector('#trafficLight_3');
let click_quantity = 0;

function makeGreen() {
    trafficLightEl_1.style.background = ('green');
    trafficLightEl_2.style.background = ('black');
    trafficLightEl_3.style.background = ('black');

    click_quantity += 1;
}

function makeYellow() {
    trafficLightEl_1.style.background = ('black');
    trafficLightEl_2.style.background = ('yellow');
    trafficLightEl_3.style.background = ('black');

    click_quantity += 1;
}

function makeRed() {
    trafficLightEl_1.style.background = ('black');
    trafficLightEl_2.style.background = ('black');
    trafficLightEl_3.style.background = ('red');

    click_quantity = 0;
}

function getCircle() {
    switch (click_quantity) {
        case 0: makeGreen();
            break;
        case 1: makeYellow();
            break;
        case 2: makeRed();
            break;
    }
}

trafficLightEl_1.addEventListener('click', getCircle);
trafficLightEl_2.addEventListener('click', getCircle);
trafficLightEl_3.addEventListener('click', getCircle);