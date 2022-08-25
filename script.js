const shuffleButton = document.querySelector('.shuffle-button');
const refreshButton = document.querySelector('.refresh-button');
const displayCards = document.querySelector('.display-cards');
const playCard = document.querySelector('.play-card');
const playedCard = document.querySelector('.played-card');
const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iogSothoth = document.querySelector('.iog-sothoth');
const shubNiggurath = document.querySelector('.shub-niggurath');
const normalDifficultButton = document.querySelector('.normal-difficult');
const firstStageGreenPanel = document.querySelector('.first-stage-green-panel');
const secondStageGreenPanel = document.querySelector('.second-stage-green-panel');
const thirdStageGreenPanel = document.querySelector('.third-stage-green-panel');
const firstStageBrownPanel = document.querySelector('.first-stage-brown-panel');
const secondStageBrownPanel = document.querySelector('.second-stage-brown-panel');
const thirdStageBrownPanel = document.querySelector('.third-stage-brown-panel');
const firstStageBluePanel = document.querySelector('.first-stage-blue-panel');
const secondStageBluePanel = document.querySelector('.second-stage-blue-panel');
const thirdStageBluePanel = document.querySelector('.third-stage-blue-panel');
let arrFirstStage = [];
let arrSecondStage = [];
let arrThirdStage = [];
let allStage = [];
let randomElement = {};
let numAncient = 5;

const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',      
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',   
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',  
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',    
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ]
  
const cardsDataGreen = [
    {
      id: 'green1',
      cardFace: './assets/MythicCards/green/green1.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      cardFace: './assets/MythicCards/green/green2.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      cardFace: './assets/MythicCards/green/green3.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      cardFace: './assets/MythicCards/green/green4.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      cardFace: './assets/MythicCards/green/green5.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      cardFace: './assets/MythicCards/green/green6.png',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      cardFace: './assets/MythicCards/green/green7.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      cardFace: './assets/MythicCards/green/green8.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      cardFace: './assets/MythicCards/green/green9.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      cardFace: './assets/MythicCards/green/green10.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      cardFace: './assets/MythicCards/green/green11.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      cardFace: './assets/MythicCards/green/green12.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      cardFace: './assets/MythicCards/green/green13.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',
      cardFace: './assets/MythicCards/green/green14.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',
      cardFace: './assets/MythicCards/green/green15.png',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',
      cardFace: './assets/MythicCards/green/green16.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      cardFace: './assets/MythicCards/green/green17.png',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      cardFace: './assets/MythicCards/green/green18.png',
      difficulty: 'easy',
      color:'green'
    },
  ]

  const cardsDataBrown = [
    {
      id: 'brown1',
      cardFace: './assets/MythicCards/brown/brown1.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      cardFace: './assets/MythicCards/brown/brown2.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      cardFace: './assets/MythicCards/brown/brown3.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      cardFace: './assets/MythicCards/brown/brown4.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      cardFace: './assets/MythicCards/brown/brown5.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      cardFace: './assets/MythicCards/brown/brown6.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      cardFace: './assets/MythicCards/brown/brown7.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      cardFace: './assets/MythicCards/brown/brown8.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      cardFace: './assets/MythicCards/brown/brown9.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      cardFace: './assets/MythicCards/brown/brown10.png',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      cardFace: './assets/MythicCards/brown/brown11.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      cardFace: './assets/MythicCards/brown/brown12.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      cardFace: './assets/MythicCards/brown/brown13.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      cardFace: './assets/MythicCards/brown/brown14.png',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      cardFace: './assets/MythicCards/brown/brown15.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      cardFace: './assets/MythicCards/brown/brown16.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      cardFace: './assets/MythicCards/brown/brown17.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      cardFace: './assets/MythicCards/brown/brown18.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      cardFace: './assets/MythicCards/brown/brown19.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      cardFace: './assets/MythicCards/brown/brown20.png',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      cardFace: './assets/MythicCards/brown/brown21.png',
      difficulty: 'easy',
      color:'brown'
    },
  ]

  const cardsDataBlue = [
    {
      id: 'blue1',
      cardFace: './assets/MythicCards/blue/blue1.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      cardFace: './assets/MythicCards/blue/blue2.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      cardFace: './assets/MythicCards/blue/blue3.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      cardFace: './assets/MythicCards/blue/blue4.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      cardFace: './assets/MythicCards/blue/blue5.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      cardFace: './assets/MythicCards/blue/blue6.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      cardFace: './assets/MythicCards/blue/blue7.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      cardFace: './assets/MythicCards/blue/blue8.png',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      cardFace: './assets/MythicCards/blue/blue9.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      cardFace: './assets/MythicCards/blue/blue10.png',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      cardFace: './assets/MythicCards/blue/blue11.png',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      cardFace: './assets/MythicCards/blue/blue12.png',
      difficulty: 'normal',
      color:'blue'
    },
  ]

alert(`
Attention! Scary sounds, turn down the volume!
1. Click on the monster
2. There is only one difficulty - normal.
3. Click "Shuffle cards".
4. Click on the reversed deck of cards and a new card will open
5. Try not to die

If you get confused, just click "Reset settings"`);

function getRandomElementAndDelIFromArr(arr) {  
  return (arr.length != 0) ? arr.splice([Math.floor(Math.random()*arr.length)], 1) : console.log(`болше нет таких карт`);
};

function refreshPage(){
  window.location.reload();
};

function getDisplayCard(monster){
  firstStageGreenPanel.innerHTML = ancientsData[monster].firstStage.greenCards;
  firstStageBrownPanel.innerHTML = ancientsData[monster].firstStage.brownCards;
  firstStageBluePanel.innerHTML = ancientsData[monster].firstStage.blueCards;
  secondStageGreenPanel.innerHTML = ancientsData[monster].secondStage.greenCards;
  secondStageBrownPanel.innerHTML = ancientsData[monster].secondStage.brownCards;
  secondStageBluePanel.innerHTML = ancientsData[monster].secondStage.blueCards;
  thirdStageGreenPanel.innerHTML = ancientsData[monster].thirdStage.greenCards;
  thirdStageBrownPanel.innerHTML = ancientsData[monster].thirdStage.brownCards;
  thirdStageBluePanel.innerHTML = ancientsData[monster].thirdStage.blueCards;
};

refreshButton.addEventListener('click', () => {
  refreshPage();
});

normalDifficultButton.addEventListener('click', () => {
  alert('Difficulty selected. There is only one difficulty - normal.')
});

const audio0 = new Audio();
  
azathoth.addEventListener('click', () => {
  audio0.src = "./assets/mp3/laugh.mp3"
  audio0.currentTime = 0;
  audio0.volume=0.5;
  audio0.play();  
  cthulthu.classList.toggle('hidden');
  iogSothoth.classList.toggle('hidden');
  shubNiggurath.classList.toggle('hidden');
  numAncient = 0;
  getDisplayCard(numAncient);
});

cthulthu.addEventListener('click', () => {
  audio0.src = "./assets/mp3/laugh.mp3"
  audio0.currentTime = 0;
  audio0.volume=0.5;
  audio0.play();
  azathoth.classList.toggle('hidden');
  iogSothoth.classList.toggle('hidden');
  shubNiggurath.classList.toggle('hidden');
  numAncient = 1;
  getDisplayCard(numAncient);
});

 iogSothoth.addEventListener('click', () => {
  audio0.src = "./assets/mp3/laugh.mp3"
  audio0.currentTime = 0;
  audio0.volume=0.5;
  audio0.play();
  azathoth.classList.toggle('hidden');
  cthulthu.classList.toggle('hidden');
  shubNiggurath.classList.toggle('hidden');
  numAncient = 2;
  getDisplayCard(numAncient);
 });

shubNiggurath.addEventListener('click', () => {
  audio0.src = "./assets/mp3/laugh.mp3"
  audio0.currentTime = 0;
  audio0.volume=0.5;
  audio0.play();
  azathoth.classList.toggle('hidden');
  iogSothoth.classList.toggle('hidden');
  cthulthu.classList.toggle('hidden');
  numAncient = 3;
  getDisplayCard(numAncient);
});

const audio = new Audio();

 shuffleButton.addEventListener('click', () => {
  if (numAncient === 5) {
    alert('Click on the monster')
  }
  else {
    audio.src = "./assets/mp3/cards.mp3"
    audio.currentTime = 0;
    audio.play();
    for (let i = 0; i < ancientsData[numAncient].firstStage.greenCards; i++) {
        arrFirstStage.push(getRandomElementAndDelIFromArr(cardsDataGreen)); 
    }; 
    for (let i = 0; i < ancientsData[numAncient].firstStage.blueCards; i++) {
        arrFirstStage.push(getRandomElementAndDelIFromArr(cardsDataBlue)); 
    };
    for (let i = 0; i < ancientsData[numAncient].firstStage.brownCards; i++) {
        arrFirstStage.push(getRandomElementAndDelIFromArr(cardsDataBrown));
    };   

    for (let i = 0; i < ancientsData[numAncient].secondStage.greenCards; i++) {
        arrSecondStage.push(getRandomElementAndDelIFromArr(cardsDataGreen)); 
    }; 
    for (let i = 0; i < ancientsData[numAncient].secondStage.blueCards; i++) {
        arrSecondStage.push(getRandomElementAndDelIFromArr(cardsDataBlue)); 
    };
    for (let i = 0; i < ancientsData[numAncient].secondStage.brownCards; i++) {
        arrSecondStage.push(getRandomElementAndDelIFromArr(cardsDataBrown));
    }; 

    for (let i = 0; i < ancientsData[numAncient].thirdStage.greenCards; i++) {
        arrThirdStage.push(getRandomElementAndDelIFromArr(cardsDataGreen)); 
    }; 
    for (let i = 0; i < ancientsData[numAncient].thirdStage.blueCards; i++) {
        arrThirdStage.push(getRandomElementAndDelIFromArr(cardsDataBlue)); 
    };
    for (let i = 0; i < ancientsData[numAncient].thirdStage.brownCards; i++) {
        arrThirdStage.push(getRandomElementAndDelIFromArr(cardsDataBrown));
    };  
    playedCard.classList.toggle('hidden');
    shuffleButton.classList.toggle('hidden');
    displayCards.classList.toggle('hidden');
  }
});

const audio1 = new Audio();

playedCard.addEventListener('click', () => {
  audio1.src = "./assets/mp3/card.mp3"
  audio1.currentTime = 0;
  audio1.play();
  if (arrFirstStage.length > 0) {    
    randomElement = getRandomElementAndDelIFromArr(arrFirstStage);
    playCard.style.backgroundImage = `url('${randomElement[0][0].cardFace}')`;
    playCard.style.backgroundSize = 'cover';
    if (randomElement[0][0].color === 'green') {
      firstStageGreenPanel.innerHTML = +(firstStageGreenPanel.textContent) - 1;
    }
    if (randomElement[0][0].color === 'brown') {
      firstStageBrownPanel.innerHTML = +(firstStageBrownPanel.textContent) - 1;
    }
    if (randomElement[0][0].color === 'blue') {
      firstStageBluePanel.innerHTML = +(firstStageBluePanel.textContent) - 1;
    }
  }
  else if (arrSecondStage.length > 0) {
    randomElement = getRandomElementAndDelIFromArr(arrSecondStage);
    playCard.style.backgroundImage = `url('${randomElement[0][0].cardFace}')`;
    if (randomElement[0][0].color === 'green') {
      secondStageGreenPanel.innerHTML = +(secondStageGreenPanel.textContent) - 1;
    }
    if (randomElement[0][0].color === 'brown') {
      secondStageBrownPanel.innerHTML = +(secondStageBrownPanel.textContent) - 1;
    }
    if (randomElement[0][0].color === 'blue') {
      secondStageBluePanel.innerHTML = +(secondStageBluePanel.textContent) - 1;
    }
  }
  else if (arrThirdStage.length > 0) {
    if(arrThirdStage.length > 1) {
      randomElement = getRandomElementAndDelIFromArr(arrThirdStage);
      playCard.style.backgroundImage = `url('${randomElement[0][0].cardFace}')`;
      if (randomElement[0][0].color === 'green') {
        thirdStageGreenPanel.innerHTML = +(thirdStageGreenPanel.textContent) - 1;
      }
      if (randomElement[0][0].color === 'brown') {
        thirdStageBrownPanel.innerHTML = +(thirdStageBrownPanel.textContent) - 1;
      }
      if (randomElement[0][0].color === 'blue') {
        thirdStageBluePanel.innerHTML = +(thirdStageBluePanel.textContent) - 1;
      }
    } 
    else {
      randomElement = getRandomElementAndDelIFromArr(arrThirdStage);
      playCard.style.backgroundImage = `url('${randomElement[0][0].cardFace}')`;
      playedCard.classList.toggle('hidden');
      alert('Now the last card in the game will open. Click "Reset Settings.');
      if (randomElement[0][0].color === 'green') {
        thirdStageGreenPanel.innerHTML = +(thirdStageGreenPanel.textContent) - 1;
      }
      if (randomElement[0][0].color === 'brown') {
        thirdStageBrownPanel.innerHTML = +(thirdStageBrownPanel.textContent) - 1;
      }
      if (randomElement[0][0].color === 'blue') {
        thirdStageBluePanel.innerHTML = +(thirdStageBluePanel.textContent) - 1;
      }
    } 
  };
});

console.log(`[+] 1. На выбор предоставляется 4 карты древних +20 баллов.
[+/-] 2. На выбор предоставляется 1 уровень сложности +5 баллов.
[+] 3. Карты замешиваются согласно правилам игры +40 баллов.
[+] 4. Есть трекер текущего состояния колоды +20 баллов.
Итого: 85 баллов`);
