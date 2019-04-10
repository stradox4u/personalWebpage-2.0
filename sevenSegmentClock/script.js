const firstDigit = {
    a: '#first-digit > .a',
    b: '#first-digit > .b',
    c: '#first-digit > .c',
    d: '#first-digit > .d',
    e: '#first-digit > .e',
    f: '#first-digit > .f',
    g: '#first-digit > .g'
};

const secondDigit = {
    a: '#second-digit > .a',
    b: '#second-digit > .b',
    c: '#second-digit > .c',
    d: '#second-digit > .d',
    e: '#second-digit > .e',
    f: '#second-digit > .f',
    g: '#second-digit > .g'
};

const thirdDigit = {
    a: '#third-digit > .a',
    b: '#third-digit > .b',
    c: '#third-digit > .c',
    d: '#third-digit > .d',
    e: '#third-digit > .e',
    f: '#third-digit > .f',
    g: '#third-digit > .g'
};

const fourthDigit = {
    a: '#fourth-digit > .a',
    b: '#fourth-digit > .b',
    c: '#fourth-digit > .c',
    d: '#fourth-digit > .d',
    e: '#fourth-digit > .e',
    f: '#fourth-digit > .f',
    g: '#fourth-digit > .g'
};

const secondTens = {
    a: '#second-1 > .a',
    b: '#second-1 > .b',
    c: '#second-1 > .c',
    d: '#second-1 > .d',
    e: '#second-1 > .e',
    f: '#second-1 > .f',
    g: '#second-1 > .g'
};

const secondUnits = {
    a: '#second-2 > .a',
    b: '#second-2 > .b',
    c: '#second-2 > .c',
    d: '#second-2 > .d',
    e: '#second-2 > .e',
    f: '#second-2 > .f',
    g: '#second-2 > .g'
};

let displayZero = function(seq) {document.querySelector(seq.g).style.visibility = 'hidden';}

let displayOne = function(seq) {
    document.querySelector(seq.a).style.visibility = 'hidden';
    document.querySelector(seq.d).style.visibility = 'hidden';
    document.querySelector(seq.e).style.visibility = 'hidden';
    document.querySelector(seq.f).style.visibility = 'hidden';
    document.querySelector(seq.g).style.visibility = 'hidden';

}

let displayTwo = function(seq) {
    document.querySelector(seq.c).style.visibility = 'hidden';
    document.querySelector(seq.f).style.visibility = 'hidden';
}

let displayThree = function(seq) {
    document.querySelector(seq.e).style.visibility = 'hidden';
    document.querySelector(seq.f).style.visibility = 'hidden';
}

let displayFour = function(seq) {
    document.querySelector(seq.a).style.visibility = 'hidden';
    document.querySelector(seq.d).style.visibility = 'hidden';
    document.querySelector(seq.e).style.visibility = 'hidden';

}

let displayFive = function(seq) {
    document.querySelector(seq.b).style.visibility = 'hidden';
    document.querySelector(seq.e).style.visibility = 'hidden';
}

let displaySix = function(seq) {
    document.querySelector(seq.b).style.visibility = 'hidden';
}

let displaySeven = function(seq) {
    document.querySelector(seq.d).style.visibility = 'hidden';
    document.querySelector(seq.e).style.visibility = 'hidden';
    document.querySelector(seq.f).style.visibility = 'hidden';
    document.querySelector(seq.g).style.visibility = 'hidden';
}

let displayEight = function(seq) {

}

let displayNine = function(seq) {
    document.querySelector(seq.e).style.visibility = 'hidden';
}



let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

if (hours > 12) {
    hours = hours - 12;
};



let formattedHours = ('0' + hours).slice(-2);
let formattedMinutes = ('0' + minutes).slice(-2);
let formattedSeconds = ('0' + seconds).slice(-2);

let hoursToDisplay = formattedHours.split('');
let minutesToDisplay = formattedMinutes.split('');
let secondsToDisplay = formattedSeconds.split('');

console.log(hoursToDisplay, minutesToDisplay, secondsToDisplay);

if (hoursToDisplay[0] === '0') {
    displayZero(firstDigit);
} else if (hoursToDisplay[0] === '1') {
    displayOne(firstDigit);
};

if (hoursToDisplay[1] === '0') {
    displayZero(secondDigit);
} else if (hoursToDisplay[1] === '1') {
    displayOne(secondDigit);
} else if (hoursToDisplay[1] === '2') {
    displayTwo(secondDigit);
} else if (hoursToDisplay[1] === '3') {
    displayThree(secondDigit);
} else if (hoursToDisplay[1] === '4') {
    displayFour(secondDigit);
} else if (hoursToDisplay[1] === '5') {
    displayFive(secondDigit);
} else if (hoursToDisplay[1] === '6') {
    displaySix(secondDigit);
} else if (hoursToDisplay[1] === '7') {
    displaySeven(secondDigit);
} else if (hoursToDisplay[1] === '8') {
    displayEight(secondDigit);
} else if (hoursToDisplay[1] === '9') {
    displayNine(secondDigit);
};

if (minutesToDisplay[0] === '0') {
    displayZero(thirdDigit);
} else if (minutesToDisplay[0] === '1') {
    displayOne(thirdDigit);
} else if (minutesToDisplay[0] === '2') {
    displayTwo(thirdDigit);
} else if (minutesToDisplay[0] === '3') {
    displayThree(thirdDigit);
} else if (minutesToDisplay[0] === '4') {
    displayFour(thirdDigit);
} else if (minutesToDisplay[0] === '5') {
    displayFive(thirdDigit);
};

if (minutesToDisplay[1] === '0') {
    displayZero(fourthDigit);
} else if (minutesToDisplay[1] === '1') {
    displayOne(fourthDigit);
} else if (minutesToDisplay[1] === '2') {
    displayTwo(fourthDigit);
} else if (minutesToDisplay[1] === '3') {
    displayThree(fourthDigit);
} else if (minutesToDisplay[1] === '4') {
    displayFour(fourthDigit);
} else if (minutesToDisplay[1] === '5') {
    displayFive(fourthDigit);
} else if (minutesToDisplay[1] === '6') {
    displaySix(fourthDigit);
} else if (minutesToDisplay[1] === '7') {
    displaySeven(fourthDigit);
} else if (minutesToDisplay[1] === '8') {
    displayEight(fourthDigit);
} else if (minutesToDisplay[1] === '9') {
    displayNine(fourthDigit);
};

if (secondsToDisplay[0] === '0') {
    displayZero(secondTens);
} else if (secondsToDisplay[0] === '1') {
    displayOne(secondTens);
} else if (secondsToDisplay[0] === '2') {
    displayTwo(secondTens);
} else if (secondsToDisplay[0] === '3') {
    displayThree(secondTens);
} else if (secondsToDisplay[0] === '4') {
    displayFour(secondTens);
} else if (secondsToDisplay[0] === '5') {
    displayFive(secondTens);
};

if (secondsToDisplay[1] === '0') {
    displayZero(secondUnits);
} else if (secondsToDisplay[1] === '1') {
    displayOne(secondUnits);
} else if (secondsToDisplay[1] === '2') {
    displayTwo(secondUnits);
} else if (secondsToDisplay[1] === '3') {
    displayThree(secondUnits);
} else if (secondsToDisplay[1] === '4') {
    displayFour(secondUnits);
} else if (secondsToDisplay[1] === '5') {
    displayFive(secondUnits);
} else if (secondsToDisplay[1] === '6') {
    displaySix(secondUnits);
} else if (secondsToDisplay[1] === '7') {
    displaySeven(secondUnits);
} else if (secondsToDisplay[1] === '8') {
    displayEight(secondUnits);
} else if (secondsToDisplay[1] === '9') {
    displayNine(secondUnits);
};

