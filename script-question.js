//PROGRESS BAR //

const maxBar = 100;
const currentBar = 0;
const progressBar;
const intervalId;

const initialisation = function() {
    progressBar = document.getElementById('progressbar');
    progressBar.value = currentBar;
    progressBar.max = maxBar
}

const progress = function() {
    currentBar++;
    progressBar.value = currentBar;
}


//ARRAY QUESTIONS WORK//

const questionTextElement = document.getElementById('questionText');
const nextBtnElement = document.getElementById('nextBtn');

const questionsWork = [
    {
    question: "Selon vous, choisir un métier, c'est :",
    answer: {
        A: "S'assurer des débouchés, un emploi",
        B: "Réaliser tous ses rêves",
    },
},
{
  question: "Préfèrez-vous travailler seul ou en equipe ?",
  answer: {
        A: "oui",
        B: "non",
    },
},
{
  question: "Vous aimez plutot travailler :",
  answer: {
        A: "Seul(e)",
        B: "En équipe",
    },
},
{
    question: "Vous aimez plutot travailler :",
answer: {
        A: "En entreprise.",
        B: "En remote.",
    },
},
{
    question: "De quel emploi-avez toujours rêvé :",
    answer: {
        A: "Medecin",
        B: "Pilote de F1",
    },
},
{
    question: "De quel emploi-avez toujours rêvé :",
    answer: {
        A: "Medecin",
        B: "Pilote de F1",
    },
},
{
    question: "Pensez-vous avoir reussi ?",
    answer: {
        A: "Oui",
        B: "Non",
    },
},
{
    question: "Que recherchez-vous dans votre lieu de travail ?",
    answer:{
        A: "L'autonomie",
        B: "Les challenges",
    },
},
{
    question: "Parmi les deux propositions, vous êtes plutôt ?",
    answer: {
        A: "Extraverti",
        B: "Introverti"
    },
},
];


let currentIndex = 0;

function updatePageQuestion(currentQuestion) {
    questionTextElement.innerHTML = currentQuestion.questionsWork;
}

updatePageQuestion(questionsWork[currentIndex]);

nextBtnElement.addEventListener('click' () => {
    currentIndex += 1;
    updatePageQuestion(questionsWork[currentIndex]);
});





//ARRAY QUESTIONS LOVE//

const quesionLove = [ 
    {
    question: "Vous avez rencontré votre âme sœur il y a 6 mois de cela, comment vous imaginez-vous dans 1 an :",
    answer: {
        A: "En train de peaufiner les préparatifs de notre mariage imminent.",
        B: "Chacun chez soi, rien de tel pour préserver la paix et l’étincelle.",
    },
},
{
    question: "Côté enfant, je souhaite :",
    answer: {
        A: "Une demie douzaine d’enfants : famille nombreuse, famille heureuse !",
        B: "Les enfants, c’est bien chez les autres !",
    },
},
{
    question: "Les courses et le ménage c’est :",
    answer: {
        A: "Chacun son  tour, c’est normal",
        B: "Pas pour moi je suis allergique",
    },
},
{
    question: "Une fois en couple vous envisagez les sorties :",
    answer: {
        A: "Sans mon /ma bien aimé/e",
        B: "Tous les 2 ou pas",
    },
},
{
    question: "Lors d’une soirée, une personne du sexe opposé semble porter un intérêt un peu trop marqué à votre moitié :",
    answer: {
        A: "Vous êtes plutôt fier/ière et vous lui faites confiance pour gérer la situation comme il se doit.",
        B:  "Vous vous fâchez contre votre moitié, c’est insupportable cette situation !",
    },
},
{
    question: "Côté spirituel, Il est important pour vous que votre conjoint :",
    answer: {
        A: "Partage la même vision de la religion que vous et vous accompagne aux offices.",
        B: "Respecte votre vision de la religion, peu importe s’il/elle est pratiquant /e voire croyant/e",
    },
},
{
    question: "Pour  prendre une décision importante vous concernant :",
    answer: {
        A: "Je n’écoute que moi.",
        B: "Je compte sur ma moitié pour me diriger dans la bonne direction.",
    },
},
{
    question: "Votre conjoint a passé une journée terrible et a besoin de se confier, de partager",
    answer: {
        A: "Je suis à l’écoute, je l’aide à exprimer ses sentiments et le soutiens",
        B: "Vous changez, tout de suite, de sujet, il ne sert à rien de se plaindre.",
    },
},
{
    question: "Pour l’éducation des enfants…",
    answer: {
        A: "Ils seront élevés de la même façon dont je l’ai été, je ne vois pas d’autre alternative.",
        B: "C’est une page blanche à écrire à deux.",
    },
},
{
    question: "Les loisirs que vous aimeriez partager avec votre âme soeur :",
    answer: {
        A: "Des moments tranquilles devant une série, Boum Boum crac-crac",
        B: "Des voyages, de l’aventure",
    },
},
];


function updatePageQuestion(currentQuestion) {
    questionTextElement.innerHTML = currentQuestion.questionLove;
}

updatePageQuestion(questionLove[currentIndex]);

nextBtnElement.addEventListener('click' () => {
    currentIndex += 1;
    updatePageQuestion(questionLove[currentIndex]);
});


  
//ARRAY QUESTIONS FRIEND//



const questionFriend = [
{
question: " L’affirmation qui me correspond le mieux…",
    answer: {
        A: "Je sais écouter.",
        B: "Je sais me faire entendre.",
    },
},
{
    question: "Nous deux, on pourrait reprendre les rôles de…",
    answer: {
        A: "Starsky et Hutch… ou Dupond et Dupont !",
        B: "Laurel et Hardy… ou Astérix et Obélix.",
    },
},
{
    question: "A quoi reconnaît-on son/sa meilleur/e ami/e ?",
    answer:{
        A: "On peut compter sur lui/elle pour recueillir nos confidences et garder nos secrets.",
        B: "On peut compter sur lui/elle pour ne rien vous épargner : il/elle sera toujours sincère avec moi.",
    },
},
{
    question: "Si on était un tandem de super-héros, on serait…",
    answer: {
        A: "Batman et Robin.",
        B: "Groot et Rocket Racoon",
    },
},
{
    question: "Quel est votre animal préféré ?",
    answer: {
        A: "Chien",
        B: "Chat",
    },
},
{
    question: "Un défaut que je ne supporte pas…",
    answer: {
        A: "L’égoïsme.",
        B: "L’intolérance.",
    },
},
{
    question: "Vous etes accoudé au bar...",
    answer: {
        A: "Je sais quoi lui commander",
        B: "On va attendre qu'il/elle revienne des sanitaires",
    },

},
{
    question: "Lorsque tu arrive chez elle/lui...",
    answer: {
    A: "Tu te sers dans le frigo",
    B: "Tu demandes poliement",
    },
},
{
    question: "Vous refaite le monde un soir...",
    answer: {
    A: "Vous utilisez des expressions inconnues du reste du monde",
    B: "Pas un bruit, l'autre sait ce que vous pensé",
    },
},
{
    question: "Au fond, une véritable amie, c’est quoi ?",
    answer: {
    A: "Un être que l’on aime malgré ses défauts ou nos désaccords.",
    B: "Un miroir de mes défauts comme de mes qualités.",
    },
},
]



function updatePageQuestion(currentQuestion) {
    questionTextElement.innerHTML = currentQuestion.questionFriend;
}

updatePageQuestion(questionFriend[currentIndex]);

nextBtnElement.addEventListener('click' () => {
    currentIndex += 1;
    updatePageQuestion(questionFriend[currentIndex]);
});

