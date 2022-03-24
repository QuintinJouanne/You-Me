const theme =
  localStorage.getItem('theme'); /* se mettre ok sur la bonne clé ET REPONSE */

const answersPlayerOne = JSON.parse(localStorage.getItem('answersPlayerOne'));

const answersPlayerTwo = JSON.parse(localStorage.getItem('answersPlayerTwo'));
if (answersPlayerOne && answersPlayerTwo) {
  let communAnswers = 0;

  for (let i = 0; i < answersPlayerOne.length; i += 1) {
    const answerPlayerOne = answersPlayerOne[i];
    const answerPlayerTwo = answersPlayerTwo[i];
    if (answerPlayerOne === answerPlayerTwo) communAnswers += 1;
  }

  const score = communAnswers * 10;

  const progressBar = document.querySelector('.circular-progress');
  const valueContainer = document.querySelector('.value-container');

  let progressValue = 0;
  const progressEndValue = score;
  const speed = 100;

  const progress = setInterval(() => {
    progressValue += 1;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
    #E94F4F ${progressValue * 3.6}deg,
    #F3A0A0 ${progressValue * 3.6}deg
  )`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  /* DECLARER VARIABLE IF EN FONCTION DU SCORE INDIQUER
  LES REPONSES EN CHAINE DE CARACTERE ET DES SOURCES POUR LES IMG */

  const contentToDisplay = {
    love: {
      lowCompat: {
        text: 'Sincérement, adoptez chacun un animal de compagnie serait une idée plus judicieuse.',
        image: 'images/tenor (1).gif',
        title: 'IM-PO-SSI-BLE',
      },
      mediumCompat: {
        text: 'Revez pas, ca va pas durer plus longtemps...',
        image: 'https://media.giphy.com/media/26xBRiIYbyjCzYMAU/giphy.gif',
        title: "l'amour dure 3ans",
      },
      hightCompat: {
        text: 'Félicitations ! Vous venez de rencontrer votre âme soeur, ne nous remerciez pas.',
        image: 'https://media.giphy.com/media/vDkkDM5m8ITmM/giphy.gif',
        title: 'Le début d"une histoire',
      },
    },
    friend: {
      lowCompat: {
        text: 'Vous vous detestez, vous ne le saviez juste pas encore.',
        image: 'https://media.giphy.com/media/VfyC5j7sR4cso/giphy.gif',
        title: 'jamais amis, surement ennemis',
      },
      mediumCompat: {
        text: 'Intéressant, tu viens de rencontrer le bon pote qui rendra ton meilleur ou ta meilleure amie vert de jalousie',
        image: 'https://media.giphy.com/media/10LKovKon8DENq/giphy.gif',
        title: 'Un bon pote de sirées',
      },
      hightCompat: {
        text: 'Vous avez le potentiel pour devenir les meileurs amis du monde !',
        image: 'https://media.giphy.com/media/YQ4l2RLuzco5IwD4dR/giphy.gif',
        title: 'Hey Bro',
      },
    },
    work: {
      lowCompat: {
        text: 'Pour le bien de la promotion, merci de ne JAMAIS travailler ensemble !',
        image: 'https://media.giphy.com/media/i4q6NMfWILJKze9anr/giphy.gif',
        title: 'Le ou la collegue que tu deteste',
      },
      mediumCompat: {
        text: "Collaboration potentiellement interessante, cependant pensez à faire des pauses lorsque l'envie de secouer votre collègue se fera ressentir.",
        image: 'https://media.giphy.com/media/3o6ZsVGSlpm2PvxkUo/giphy.gif',
        title: 'A petite dose',
      },
      hightCompat: {
        text: 'Tout comme les Avengers, les Totally Spies ou bien Benzema et Mbappe, vous êtes fait pour collaborer ensemble !',
        image: 'https://media.giphy.com/media/rj12FejFUysTK/giphy.gif',
        title: 'Une vraie équipe de choc !',
      },
    },
  };

  /* PARTIE LOVE IMAGE */

  /* PARTIE LOWCOMPAT */

  let compatLevel = 'lowCompat';

  if (score >= 50) {
    compatLevel = 'mediumCompat';
  }
  if (score >= 90) {
    compatLevel = 'hightCompat';
  }

  const resultObject = contentToDisplay[theme][compatLevel];
  console.log(resultObject);

  const contentTitle = document.getElementById('titleAnswer');
  contentTitle.innerHTML = resultObject.title;

  const contentText = document.getElementById('text');
  contentText.innerHTML = resultObject.text;

  const contentGif = document.getElementById('gif');
  contentGif.src = resultObject.image;
}
