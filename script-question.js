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
    const questionW1 = {
        1: "Selon vous, choisir un métier, c'est :",
        A: "S'assurer des débouchés, un emploi",
        B: "Réaliser tous ses rêves",
    }
    const questionW2 = {
        2: "Préfèrez-vous travailler seul ou en equipe ?",
        A: "oui",
        B: "non",
    }
    const questionW3 = {
        3: "Vous aimez plutot travailler :",
        A: "En entreprise.",
        B: "En remote.",

    }
];





const quesionLove = [
    const questionL1 = {
        1: "Vous avez rencontré votre âme sœur il y a 6 mois de cela, comment vous imaginez-vous dans 1 an :",
        A: "En train de peaufiner les préparatifs de notre mariage imminent.",
        B: "Chacun chez soi, rien de tel pour préserver la paix et l’étincelle.",
    }
    const questionL2 = {
        2: "Côté enfant, je souhaite :",
        A: "Une demie douzaine d’enfants : famille nombreuse, famille heureuse !",
        B: "Les enfants, c’est bien chez les autres !",
    }
    const questionL3 = {
        3: "Les courses et le ménage c’est :",
        A: "Chacun son  tour, c’est normal",
        B: "Pas pour moi je suis allergique",
    }
    const questionL4 = {
        4: "Une fois en couple vous envisagez les sorties :",
        A: "Sans mon /ma bien aimé/e",
        B: "Tous les 2 ou pas",
    }
    const questionL5 = {
        5: "Lors d’une soirée, une personne du sexe opposé semble porter un intérêt un peu trop marqué à votre moitié :",
        A: "Vous êtes plutôt fier/ière et vous lui faites confiance pour gérer la situation comme il se doit.",
        B:  "Vous vous fâchez contre votre moitié, c’est insupportable cette situation !",
    }
    const questionL6 = {
        6: "Côté spirituel, Il est important pour vous que votre conjoint :",
        A: "Partage la même vision de la religion que vous et vous accompagne aux offices.",
        B: "Respecte votre vision de la religion, peu importe s’il/elle est pratiquant /e voire croyant/e",
    }
    const questionL7 = {
        7: "Pour  prendre une décision importante vous concernant :",
        A: "Je n’écoute que moi.",
        B: "Je compte sur ma moitié pour me diriger dans la bonne direction.",
    }
    const questionL8 = {
        8: "Votre conjoint a passé une journée terrible et a besoin de se confier, de partager",
        A: "Je suis à l’écoute, je l’aide à exprimer ses sentiments et le soutiens",
        B: "Vous changez, tout de suite, de sujet, il ne sert à rien de se plaindre.",
    }
    const questionL9 = {
        9: "Pour l’éducation des enfants…",
        A: "Ils seront élevés de la même façon dont je l’ai été, je ne vois pas d’autre alternative.",
        B: "C’est une page blanche à écrire à deux.",
    }
    const questionL10 = {
        10: "Les loisirs que vous aimeriez partager avec votre âme soeur :",
        A: "Des moments tranquilles devant une série, Boum Boum crac-crac",
        B: "Des voyages, de l’aventure",
    }
];

  


const questionFriend = {
    const questionF1 = {
        1:" L’affirmation qui me correspond le mieux…",
        A: "Je sais écouter.",
        B: "Je sais me faire entendre.",
    }
    const questionF2 = {
        2: "Nous deux, on pourrait reprendre les rôles de…",
        A: "Starsky et Hutch… ou Dupond et Dupont !",
        B: "Laurel et Hardy… ou Astérix et Obélix.",
    }
    const questionF3 = {
    3: "A quoi reconnaît-on son/sa meilleur/e ami/e ?",
    A: "On peut compter sur lui/elle pour recueillir nos confidences et garder nos secrets./  B- On peut compter sur lui/elle pour ne rien vous épargner : il/elle sera toujours sincère avec moi.",

    }
    4: "Si on était un tandem de super-héros, on serait…/A- Batman et Robin./B- Groot et Rocket Racoon",
    5: "Quel est votre animal préféré ?/A- Chien/B- Chat",
    6: "Un défaut que je ne supporte pas…/A- L’égoïsme./B- L’intolérance.",
    7: "Vous etes accoudé au bar.../ A- Je sais quoi lui commander/B- On va attendre qu'il/elle revienne des sanitaires",
    8: "Lorsque tu arrive chez elle/lui.../A- Tu te sers dans le frigo/B- Tu demandes poliement",
    9: "Vous refaite le monde un soir.../A- vous utilisez des expressions inconnues du reste du monde/B- Pas un bruit, l'autre sait ce que vous pensé",
    10: "Au fond, une véritable amie, c’est quoi ?/A- Un être que l’on aime malgré ses défauts ou nos désaccords./B- Un miroir de mes défauts comme de mes qualités.",
    
}