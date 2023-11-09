let user = document.getElementById("name");

// This variable is responsible to host the score and shoul be only mutated inside the 'buttonQuestion' func
// and reset animals and plants
let score = 0;

let timerToCountDown;

// Welcome card behavior and send to categories
function buttonWelcome() {
  if (user.value.length == 0) {
    document.getElementById("errorWelcome").className = "error message show";
    document.getElementById("errorWelcome").innerHTML = "Escribe tu nombre";
  } else {
    document.getElementById("messageWelcome").innerHTML =
      "HOLA " + user.value.toUpperCase() + "<br/>¿Qué jugaremos hoy?";
    document.getElementById("welcome").className = "hide";
    document.getElementById("categories").className = "categories card show";
  }
}

// Categories buttons
function buttonAnimals() {
  document.getElementById("categories").className = "hide";
  document.getElementById("first").className = "first card show";
  setTimer();
}

function buttonPlants() {
  document.getElementById("categories").className = "hide";
  document.getElementById("firstPlant").className = "first plant card show";
  setTimer();
}

//
function setTimer() {
  let countDown = 60;

  let countToReload = countDown + 5;

  timerToCountDown = setInterval(function () {
    countDown--;
    countToReload--;

    document.getElementById("timer").innerHTML =
      "Tiempo restante: " + countDown + " s.";

    if (countDown < 0) {
      document.getElementById("timer").innerHTML = "Game over";
    }

    if (countToReload < 0) {
      clearInterval(timerToCountDown);
      window.location.reload();
    }
  }, 1000);
}

/**
This function is responsible for evaluate the answer given, will show and error message
if the answer is not correct

@param: radio - The array of radio buttons 
@param: index - The index in the questions
@param: answer - The correct answer
@param: word - The word of that answer
@param: funct - The func of the button 
@param: button - The button to show after
@param: error - The error id
@param: silhouette - The silohoutte id
@param: plant - The plant id

@return: nothing
*/
function buttonQuestion(
  radio,
  index,
  answer,
  word,
  funct,
  button,
  error,
  silhouette,
  plant
) {
  let radioButtons = document.getElementsByName(radio);
  // Check if there's is an option checked
  if (checkedAnswers(radioButtons)) {
    document.getElementById(error).className = "error hide";
    // Check if the option is the correct answer
    if (radioButtons[index].checked) {
      // Increase the score
      score++;
      document.getElementById(answer).innerHTML = "Felicidades. Es correcto";
    } else {
      document.getElementById(answer).innerHTML =
        "¡Incorrecto 😓! La respuesta correcta es " + word;
    }
    // Move to next secion logic
    document.getElementById(funct).className = "button hide";
    document.getElementById(button).className = "button show";
    document.getElementById(silhouette).className = "hide";
    document.getElementById(plant).className = "show";
  } else {
    // Showing error message if there's no option checked
    document.getElementById(error).className = "error show";
    document.getElementById(error).innerHTML = "Elige una opcion";
  }
}

function buttonNext(sectionToHide, sectionToShow, fullClassName) {
  document.getElementById(sectionToHide).className = "hide";
  document.getElementById(sectionToShow).className = fullClassName;
  // Showing score sections
  document.getElementById("finalScoreAnimals").innerHTML =
    "¡¡ " + user.value.toUpperCase() + " !! <br/> Tu puntaje final es " + score;
  document.getElementById("buttonRestartAnimals").className = "button show";
  document.getElementById("finalScorePlants").innerHTML =
    "¡¡ " + user.value.toUpperCase() + " !! <br/> Tu puntaje final es " + score;
  document.getElementById("buttonRestartPlants").className = "button show";
}

function buttonRestartAnimals() {
  score = 0;
  resetUIAnimals();
  resetQuestionsAnimals();
  clearInterval(timerToCountDown);
  document.getElementById("timer").innerHTML = "";
}

function resetUIAnimals() {
  document.getElementById("endAnimals").className = "end animals card hide";
  document.getElementById("welcome").className = "welcome card show";
  document.getElementById("buttonStart").className = "button hide";
  document.getElementById("name").value = "";
  document.getElementById("messageWelcome").innerHTML = "";
}

function cleanAnimals(radioButtons, rightAnswer, buttonQuestion, buttonNext) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }
  console.log(radioButtons);
  document.getElementById(rightAnswer).innerHTML = "";
  document.getElementById(buttonQuestion).className = "button show";
  document.getElementById(buttonNext).className = "button hide";
}

function resetQuestionsAnimals() {
  //animales
  cleanAnimals(
    document.getElementsByName("question1"),
    "rightAnswer1",
    "buttonQuestion1",
    "buttonNext1"
  );
  cleanAnimals(
    document.getElementsByName("question2"),
    "rightAnswer2",
    "buttonQuestion2",
    "buttonNext2"
  );
  cleanAnimals(
    document.getElementsByName("question3"),
    "rightAnswer3",
    "buttonQuestion3",
    "buttonNext3"
  );
}

function buttonRestartPlants() {
  score = 0;
  resetUIPlants();
  resetQuestionsPlants();
  clearInterval(timerToCountDown);
  document.getElementById("timer").innerHTML = "";
}

function resetUIPlants() {
  document.getElementById("endPlants").className = "end plants card hide";
  document.getElementById("welcome").className = "welcome card show";
  document.getElementById("buttonStart").className = "button hide";
  document.getElementById("name").value = "";
  document.getElementById("messageWelcome").innerHTML = "";
}

function cleanPlants(
  radioButtons,
  rightAnswer,
  buttonQuestion,
  buttonNext,
  silhouette,
  plant
) {
  for (var i = 0; i < 3; i++) {
    radioButtons[i].checked = false;
  }
  document.getElementById(rightAnswer).innerHTML = "";
  document.getElementById(buttonQuestion).className = "button show";
  document.getElementById(buttonNext).className = "button hide";
  document.getElementById(silhouette).className = "show";
  document.getElementById(plant).className = "hide";
}

function resetQuestionsPlants() {
  //plantas
  cleanPlants(
    document.getElementsByName("plantQuestion1"),
    "rightPlantAnswer1",
    "buttonPlantQuestion1",
    "buttonNextPlant1",
    "silhouette1",
    "plantImage1"
  );
  cleanPlants(
    document.getElementsByName("plantQuestion2"),
    "rightPlantAnswer2",
    "buttonPlantQuestion2",
    "buttonNextPlant2",
    "silhouette2",
    "plantImage2"
  );
  cleanPlants(
    document.getElementsByName("plantQuestion3"),
    "rightPlantAnswer3",
    "buttonPlantQuestion3",
    "buttonNextPlant3",
    "silhouette3",
    "plantImage3"
  );
}

/* Show message if any rado button is selected */
function checkedAnswers(radioButtons) {
  for (var i = 0; i < 3; i++) {
    if (radioButtons[i].checked == true) {
      return true;
    }
  }
  return false;
}
