# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 solution 
```css
/* css part need to be update in the html section */
#results {
          height: fit-content;
          width: fit-content;
          /* padding: 10px 20px; Adds spacing inside the box */
          border: 2px solid black;
          background-color: white;
          border-radius: 10px;
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* Adds a soft shadow */
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.3s ease-in-out; /* Smooth transition effect */
      }

      /* When the result changes, make it pop */
      #results span {
          font-size: 22px;
      }
```

```javascript
// javascript part need to be updated in the js section 
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please Give a Valid height ${height}`;
    results.style.color = "black"; // Reset color
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please Give a Valid weight ${weight}`;
    results.style.color = "black"; // Reset color
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> -<br> You Have Underweight`;
      results.style.color = "blue";
      results.style.fontSize = "20px";
      results.style.textAlign ="center";
      results.style.marginRight ="50%";
      results.style.padding ="10px 20px";
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi}</span> - <br> You Have Normal Weight`;
      results.style.color = "green";
      results.style.fontSize = "20px";
      results.style.textAlign ="center";
      results.style.marginRight ="50%";
      results.style.padding ="10px 20px";
    } else {
      results.innerHTML = `<span>${bmi}</span> - <br> You Have Overweight`;
      results.style.color = "red";
      results.style.fontSize = "20px";
      results.style.textAlign ="center"
      results.style.marginRight ="50%";
      results.style.padding ="10px 20px";
    }
  }
});



```

## project 3 solution code
```html
<!-- html section -->
<div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
      <div id="banner"><span>London Timing</span></div>
      <div id="clock2"></div>
    </div>
```
```css
/* css section */
#clock2 {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
```

```javascript
// js section 
const clock = document.getElementById("clock");
const clock2 = document.getElementById("clock2");

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
  clock2.innerHTML = date.toLocaleTimeString("en-US", {timeZone: "America/New_York"});
}, 1000)



```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```