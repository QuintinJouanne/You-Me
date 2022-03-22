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


//OBJET QUESTIONS//



const questionsWork = [
    {
    questionW1: "Selon vous, choisir un métier, c'est :",
    answer: {
        A: "S'assurer des débouchés, un emploi",
        B: "Réaliser tous ses rêves",
    },
},
{
  questionW2: "Préfèrez-vous travailler seul ou en equipe ?",
  answer: {
        A: "oui",
        B: "non",
    },
},
{
  questionW3: "Vous aimez plutot travailler :",
  answer: {
        A: "En entreprise.",
        B: "En remote.",
    },
},
{
    questionW4: "De quel emploi-avez toujours rêvé :",
    answer: {
        A: "Medecin",
        B: "Pilote de F1",
    },
},
{
    questionW5: "De quel emploi-avez toujours rêvé :",
    answer: {
        A: "Medecin",
        B: "Pilote de F1",
    },
},
{
    questionW6: "Pensez-vous avoir reussi ?",
    answer: {
        A: "Oui",
        B: "Non",
    },
},
{
    questionW7: "Que recherchez-vous dans votre lieu de travail ?",
    answer:{
        A: "L'autonomie",
        B: "Les challenges",
    },
},
{
    questionW7: "Parmi les deux propositions, vous êtes plutôt ?",
    answer: {
        A: "Extraverti",
        B: "Introverti"
    },
},




const quesionLove = [ 
    {
    questionL1: "Vous avez rencontré votre âme sœur il y a 6 mois de cela, comment vous imaginez-vous dans 1 an :",
    answer: {
        A: "En train de peaufiner les préparatifs de notre mariage imminent.",
        B: "Chacun chez soi, rien de tel pour préserver la paix et l’étincelle.",
    },
},
{
    questionL2: "Côté enfant, je souhaite :",
    answer: {
        A: "Une demie douzaine d’enfants : famille nombreuse, famille heureuse !",
        B: "Les enfants, c’est bien chez les autres !",
    },
},
{
    questionL3: "Les courses et le ménage c’est :",
    answer: {
        A: "Chacun son  tour, c’est normal",
        B: "Pas pour moi je suis allergique",
    },
},
{
    questionL4: "Une fois en couple vous envisagez les sorties :",
    answer: {
        A: "Sans mon /ma bien aimé/e",
        B: "Tous les 2 ou pas",
    },
},
{
    questionL5: "Lors d’une soirée, une personne du sexe opposé semble porter un intérêt un peu trop marqué à votre moitié :",
    answer: {
        A: "Vous êtes plutôt fier/ière et vous lui faites confiance pour gérer la situation comme il se doit.",
        B:  "Vous vous fâchez contre votre moitié, c’est insupportable cette situation !",
    },
},
{
    questionL6: "Côté spirituel, Il est important pour vous que votre conjoint :",
    answer: {
        A: "Partage la même vision de la religion que vous et vous accompagne aux offices.",
        B: "Respecte votre vision de la religion, peu importe s’il/elle est pratiquant /e voire croyant/e",
    },
},
{
    questionL7: "Pour  prendre une décision importante vous concernant :",
    answer: {
        A: "Je n’écoute que moi.",
        B: "Je compte sur ma moitié pour me diriger dans la bonne direction.",
    },
},
{
    questionL8: "Votre conjoint a passé une journée terrible et a besoin de se confier, de partager",
    answer: {
        A: "Je suis à l’écoute, je l’aide à exprimer ses sentiments et le soutiens",
        B: "Vous changez, tout de suite, de sujet, il ne sert à rien de se plaindre.",
    },
},
{
    questionL9: "Pour l’éducation des enfants…",
    answer: {
        A: "Ils seront élevés de la même façon dont je l’ai été, je ne vois pas d’autre alternative.",
        B: "C’est une page blanche à écrire à deux.",
    },
},
{
    questionL10: "Les loisirs que vous aimeriez partager avec votre âme soeur :",
    answer: {
        A: "Des moments tranquilles devant une série, Boum Boum crac-crac",
        B: "Des voyages, de l’aventure",
    },
},
];

  


const questionFriend = [
{
    questionF1: " L’affirmation qui me correspond le mieux…",
    answer: {
        A: "Je sais écouter.",
        B: "Je sais me faire entendre.",
    },
},
{
    questionF2: "Nous deux, on pourrait reprendre les rôles de…",
    answer: {
        A: "Starsky et Hutch… ou Dupond et Dupont !",
        B: "Laurel et Hardy… ou Astérix et Obélix.",
    },
},
{
    questionF3: "A quoi reconnaît-on son/sa meilleur/e ami/e ?",
    answer: {
        A: "On peut compter sur lui/elle pour recueillir nos confidences et garder nos secrets.",
        B: "On peut compter sur lui/elle pour ne rien vous épargner : il/elle sera toujours sincère avec moi.",
    },
},
{
    questionF4: "Si on était un tandem de super-héros, on serait…",
    answer: {
        A: "Batman et Robin.",
        B: "Groot et Rocket Racoon",
    },
},
{
    questionF5: "Quel est votre animal préféré ?",
    answer: {
        A: "Chien",
        B: "Chat",
    },
},
{
    questionF6: "Un défaut que je ne supporte pas…",
    answer: {
        A: "L’égoïsme.",
        B: "L’intolérance.",
    },
},
{
    questionF7: "Vous etes accoudé au bar...",
    answer: {
        A: "Je sais quoi lui commander",
        B: "On va attendre qu'il/elle revienne des sanitaires",
    },
},
{
    questionF8: "Lorsque tu arrive chez elle/lui...",
    answer: {
        A: "Tu te sers dans le frigo",
        B: "Tu demandes poliement",
    },
},
{
    questionF9: "Vous refaite le monde un soir...",
    answer: {
        A: "Vous utilisez des expressions inconnues du reste du monde",
        B: "Pas un bruit, l'autre sait ce que vous pensé",
    },
},
{
    questionF10: "Au fond, une véritable amie, c’est quoi ?",
    answer: {
        A: "Un être que l’on aime malgré ses défauts ou nos désaccords.",
        B: "Un miroir de mes défauts comme de mes qualités.",
    },
},
];