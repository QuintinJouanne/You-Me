// PROGRESS BAR //
const progressBarContainer = document.querySelector('.progressBarContainer');
const progressBar = document.querySelector('.progress-bar');
let pourcentage = 0;
progressBar.style.width = '0%';

// ARRAY QUESTIONS WORK //
const questionTextElement = document.getElementById('questionText');
const bouton1 = document.getElementById('bouton1');
const bouton2 = document.getElementById('bouton2');
const nextBtnElement = document.getElementById('nextBtn');

const theme = localStorage.getItem('theme');
const currentPlayer = localStorage.getItem('currentPlayer');

const contentToDisplay = {
  work: {
    background: '/img/Bg-bleu-new.png',
    button: '#3980e3',
    buttonsSelected: '#09377b',
  },
  love: {
    background: '/img/Bg-rouge-new.png',
    button: '#e33950',
    buttonsSelected: '#7b0909',
  },
  friend: {
    background: '/img/Bg-marron-new.png',
    button: '#e38639',
    buttonsSelected: '#9d581f',
  },
};

const resultObject = contentToDisplay[theme];

document.body.style.backgroundImage = `url(${resultObject.background})`;
progressBarContainer.style.backgroundColor = resultObject.button;
progressBar.style.backgroundColor = resultObject.buttonsSelected;
bouton1.style.backgroundColor = resultObject.button;
bouton2.style.backgroundColor = resultObject.button;

let currentAnswer = null;

bouton1.addEventListener('click', () => {
  if (currentAnswer === null) {
    currentAnswer = 'A';
    bouton1.style.backgroundColor = resultObject.buttonsSelected;
  } else if (currentAnswer === 'A') {
    currentAnswer = null;
    bouton1.style.backgroundColor = resultObject.button;
  }
});

bouton2.addEventListener('click', () => {
  if (currentAnswer === null) {
    currentAnswer = 'B';
    bouton2.style.backgroundColor = resultObject.buttonsSelected;
  } else if (currentAnswer === 'B') {
    currentAnswer = null;
    bouton2.style.backgroundColor = resultObject.button;
  }
});

const answers = [];

const questionsByTheme = {
  work: [
    {
      question: "Selon vous, choisir un métier, c'est :",
      answer: {
        A: "S'assurer des débouchés, un emploi",
        B: 'Réaliser tous ses rêves',
      },
    },
    {
      question: 'Préfèrez-vous :',
      answer: {
        A: 'Travailler comme un acharné avec votre équipe',
        B: 'Boire des cafés avec votre équipe',
      },
    },
    {
      question: 'Vous aimez plutôt travailler :',
      answer: {
        A: 'Seul(e)',
        B: 'En équipe',
      },
    },
    {
      question: 'De quel emploi-avez toujours rêvé :',
      answer: {
        A: 'Medecin',
        B: 'Pilote de F1',
      },
    },
    {
      question: 'Vous aimez plutot travailler :',
      answer: {
        A: 'En entreprise.',
        B: 'En remote.',
      },
    },
    {
      question: 'Vous préférez travailler au sein :',
      answer: {
        A: "D'une start-up, 10 salariés",
        B: "D'une mega structure, 500 salariés",
      },
    },
    {
      question: 'Pensez-vous avoir reussi ?',
      answer: {
        A: 'Oui',
        B: 'Non',
      },
    },
    {
      question: 'Que recherchez-vous dans votre lieu de travail ?',
      answer: {
        A: "L'autonomie",
        B: 'Les challenges',
      },
    },
    {
      question: 'Parmi les deux propositions, vous êtes plutôt ?',
      answer: {
        A: 'Extraverti',
        B: 'Introverti',
      },
    },
    {
      question: 'Si vous aviez la possibilité:',
      answer: {
        A: 'Je travaille en chaussettes',
        B: 'Je travaille en costume',
      },
    },
  ],
  love: [
    {
      question:
        'Vous avez rencontré votre âme sœur il y a 6 mois de cela, comment vous imaginez-vous dans 1 an :',
      answer: {
        A: 'En train de peaufiner les préparatifs de notre mariage imminent.',
        B: 'Chacun chez soi, rien de tel pour préserver la paix et l’étincelle.',
      },
    },
    {
      question: 'Côté enfant, je souhaite :',
      answer: {
        A: 'Une demie douzaine d’enfants : famille nombreuse, famille heureuse !',
        B: 'Les enfants, c’est bien chez les autres !',
      },
    },
    {
      question: 'Les courses et le ménage c’est :',
      answer: {
        A: 'Chacun son  tour, c’est normal',
        B: 'Pas pour moi je suis allergique',
      },
    },
    {
      question: 'Une fois en couple vous envisagez les sorties :',
      answer: {
        A: 'Sans mon /ma bien aimé/e',
        B: 'Tous les 2 ou pas',
      },
    },
    {
      question:
        'Lors d’une soirée, une personne du sexe opposé semble porter un intérêt un peu trop marqué à votre moitié :',
      answer: {
        A: 'Vous êtes plutôt fier/ière et vous lui faites confiance pour gérer la situation comme il se doit.',
        B: 'Vous vous fâchez contre votre moitié, c’est insupportable cette situation !',
      },
    },
    {
      question:
        'Côté spirituel, Il est important pour vous que votre conjoint :',
      answer: {
        A: 'Partage la même vision de la religion que vous et vous accompagne aux offices.',
        B: 'Respecte votre vision de la religion, peu importe s’il/elle est pratiquant /e voire croyant/e',
      },
    },
    {
      question: 'Pour prendre une décision importante vous concernant :',
      answer: {
        A: 'Je n’écoute que moi.',
        B: 'Je compte sur ma moitié pour me diriger dans la bonne direction.',
      },
    },
    {
      question:
        'Votre conjoint a passé une journée terrible et a besoin de se confier, de partager',
      answer: {
        A: 'Je suis à l’écoute, je l’aide à exprimer ses sentiments et le soutiens',
        B: 'Vous changez, tout de suite, de sujet, il ne sert à rien de se plaindre.',
      },
    },
    {
      question: 'Pour l’éducation des enfants…',
      answer: {
        A: 'Ils seront élevés de la même façon dont je l’ai été, je ne vois pas d’autre alternative.',
        B: 'C’est une page blanche à écrire à deux.',
      },
    },
    {
      question: 'Les loisirs que vous aimeriez partager avec votre âme soeur :',
      answer: {
        A: 'Des moments tranquilles devant une série, Boum Boum crac-crac',
        B: 'Des voyages, de l’aventure',
      },
    },
  ],
  friend: [
    {
      question: ' L’affirmation qui me correspond le mieux…',
      answer: {
        A: 'Je sais écouter.',
        B: 'Je sais me faire entendre.',
      },
    },
    {
      question: 'Nous deux, on pourrait reprendre les rôles de…',
      answer: {
        A: 'Starsky et Hutch… ou Dupond et Dupont !',
        B: 'Laurel et Hardy… ou Astérix et Obélix.',
      },
    },
    {
      question: 'A quoi reconnaît-on son/sa meilleur/e ami/e ?',
      answer: {
        A: 'On peut compter sur lui/elle pour recueillir nos confidences et garder nos secrets.',
        B: 'On peut compter sur lui/elle pour ne rien vous épargner : il/elle sera toujours sincère avec moi.',
      },
    },
    {
      question: 'Si on était un tandem de super-héros, on serait…',
      answer: {
        A: 'Batman et Robin.',
        B: 'Groot et Rocket Racoon',
      },
    },
    {
      question: 'Quel est votre animal préféré ?',
      answer: {
        A: 'Chien',
        B: 'Chat',
      },
    },
    {
      question: 'Un défaut que je ne supporte pas…',
      answer: {
        A: 'L’égoïsme.',
        B: 'L’intolérance.',
      },
    },
    {
      question: 'Vous êtes accoudé au bar...',
      answer: {
        A: 'Je sais quoi lui commander',
        B: "On va attendre qu'il/elle revienne des sanitaires",
      },
    },
    {
      question: 'Lorsque tu arrives chez elle/lui...',
      answer: {
        A: 'Tu te sers dans le frigo',
        B: 'Tu demandes poliement',
      },
    },
    {
      question: 'Vous refaite le monde un soir...',
      answer: {
        A: 'Vous utilisez des expressions inconnues du reste du monde',
        B: "Pas un bruit, l'autre sait ce que vous pensé",
      },
    },
    {
      question: 'Au fond, une véritable amie, c’est quoi ?',
      answer: {
        A: 'Un être que l’on aime malgré ses défauts ou nos désaccords.',
        B: 'Un miroir de mes défauts comme de mes qualités.',
      },
    },
  ],
};

let currentIndex = 0;

const questionList = questionsByTheme[theme];

function updatePageQuestion(currentQuestion) {
  questionTextElement.innerHTML = currentQuestion.question;
  bouton1.innerHTML = currentQuestion.answer.A;
  bouton2.innerHTML = currentQuestion.answer.B;
}

updatePageQuestion(questionList[currentIndex]);

nextBtnElement.addEventListener('click', () => {
  if (currentAnswer === 'A' || currentAnswer === 'B') {
    if (pourcentage < 100) {
      pourcentage = pourcentage + 10;
      progressBar.style.width = pourcentage + '%';
    }

    currentIndex += 1;

    if (currentIndex < questionList.length) {
      updatePageQuestion(questionList[currentIndex]);
    }

    answers.push(currentAnswer);

    localStorage.setItem(
      currentPlayer === 'one' ? 'answersPlayerOne' : 'answersPlayerTwo',
      JSON.stringify(answers)
    );

    if (currentIndex === questionList.length) {
      if (currentPlayer === 'one') {
        localStorage.setItem('currentPlayer', 'two');
        window.location.href = 'Identification.html';
      } else {
        window.location.href = 'results.html';
      }
    }
    currentAnswer = null;
    bouton1.style.backgroundColor = resultObject.button;
    bouton2.style.backgroundColor = resultObject.button;
  }
});
